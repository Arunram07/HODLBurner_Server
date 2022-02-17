import { ethers } from "ethers";
import { HODL_BURNER, RPC_URL, PRIVATE_KEY } from "./constants";
import Burner_abi from "./abis/HODL_Burner.json";
//import { TransactionResponse } from "@ethersproject/abstract-provider";
import { JSBI } from "@nguyenphu27/sdk";
//import { JSBI } from "@nguyenphu27/sdk";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const Burner = new ethers.Contract(HODL_BURNER, Burner_abi, signer);

async function signAndsend(amountIn: JSBI, amountOut: JSBI): Promise<Boolean> {
  const bo = await Burner.buyFromPancakeandBurn(
    amountIn.toString(),
    amountOut.toString()
  );
  return bo;
}

export default signAndsend;
