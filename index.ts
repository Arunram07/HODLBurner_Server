import trade from "./utils";
import signAndsend from "./transactionEssentials";
import { timer, MAX, MIN } from "./constants";

let status = false;

Promise.resolve(app()).then((val) => {
  console.log("Transaction successful");
  if (val) {
    setInterval(async () => {
      if (!status) {
        status = true;
        await app().then((val) => {
          if (val) {
            console.log("Transaction successful");
            status = false;
            return;
          }
        });
      }
      if (status) {
        console.log("Last transaction isnt finished");
        return;
      }
    }, timer);
  }
});

async function app(): Promise<Boolean> {
  let booo: Boolean = false;
  try {
    console.log("Calculating random amount between " + MIN + "  &  " + MAX);
    const amount = await trade();
    console.log("Input :" + amount.in.raw);
    console.log("Output :" + amount.out.raw);
    booo = await signAndsend(amount.in.raw, amount.out.raw);
  } catch (e: any) {
    clearInterval();
    if (e.code == "NETWORK_ERROR") {
      console.log("Check your Network");
    } else {
      console.log(
        "Crashed!! Check the following and run the node again: \n 1. Make sure that we have enough liquidity in pool \n 2. Check the operator address balance \n 3. Check the balance of Burner contract"
      );
    }
  }
  return booo;
}
