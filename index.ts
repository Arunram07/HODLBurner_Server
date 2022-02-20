import trade from "./utils";
import { timer } from "./constants";
import { ethers } from "ethers";
import { HODL_BURNER, RPC_URL, PRIVATE_KEY } from "./constants";
import Burner_abi from "./abis/HODL_Burner.json";

let isTransactionPending: boolean = false;
let willReverted: boolean = false;

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const Burner = new ethers.Contract(HODL_BURNER, Burner_abi, signer);

async function app() {
  isTransactionPending = true;

  const amounts = await trade();

  console.log("In: " + amounts.in.raw);
  console.log("Out: " + amounts.out.raw);

  const estimateGas = await Burner.estimateGas.buyFromPancakeandBurn(
    amounts.in.raw.toString(),
    amounts.out.raw.toString()
  );

  //test call

  await Burner.callStatic
    .buyFromPancakeandBurn(
      amounts.in.raw.toString(),
      amounts.out.raw.toString(),
      {
        gasLimit: estimateGas,
      }
    )
    .then((res) => {
      if (res == false) {
        willReverted = true;
        console.log("Transaction will fail");
        throw new Error(
          "Crashed!! Check the following and run the node again: \n 1. Make sure that we have enough liquidity in pool \n 2. Check the operator address balance \n 3. Check the balance of Burner contract"
        );
      }
    });

  if (!willReverted) {
    const tx = await Burner.buyFromPancakeandBurn(
      amounts.in.raw.toString(),
      amounts.out.raw.toString(),
      {
        gasLimit: estimateGas,
      }
    );

    tx.wait().then((receipt: any) => {
      console.log("transaction successfull : ", receipt.transactionHash);
      isTransactionPending = false;
    });
  }
}

const runApp = setInterval(async () => {
  try {
    if (!isTransactionPending) {
      await app();
    } else if (isTransactionPending) {
      console.log("Transaction pending");
    }
  } catch (err) {
    console.log(err);
    stopApp();
  }
}, timer);

function stopApp() {
  clearInterval(runApp);
}
