import trade from "./utils";
import signAndsend from "./transactionEssentials";
import { MIN, timer } from "./constants";
import { MAX } from "./constants";

//let condition;
let status = false;

// do {
//   if (!status) {
//     status = true;
//     condition = Promise.resolve(app()).then(() => (status = false));
//   }
// } while (condition);
// {
//   if (!status) {
//     status = true;
//     setTimeout();
//   }
// }

Promise.resolve(app()).then((val) => {
  if (val) {
    setInterval(async () => {
      if (!status) {
        status = true;
        await app().then((val) => {
          if (val) {
            console.log("Transaction successful");
            status = false;
          }
        });
      }
    }, timer);
  }
});

async function app(): Promise<Boolean> {
  let booo: Boolean = false;
  try {
    console.log("Calculating random amount between " + MIN + "  &  " + MAX);
    const amount = await trade;
    console.log("Input :" + amount.in.raw);
    console.log("Output :" + amount.out.raw);
    booo = await signAndsend(amount.in.raw, amount.out.raw);
  } catch (e: any) {
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
