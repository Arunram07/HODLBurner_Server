import { ChainId } from "@pancakeswap/sdk";

//rpc node endpoint url
const RPC_URL: string = "https://bsc-dataseed.binance.org/";

//hodl erc20 address
const HODL: string = "0xE8c4bEce93084D649fB630886b5332942b643BB9";

//hodl burner contract address
const HODL_BURNER: string = "0xa1d8CC95B3230323E842515637B29Ed134D2A6bF";

//operator address
const OPERATOR_ADDRESS: string = "0x9fe8e997BF3B87E403986Ca6e15A887EcA42E36A";

//private key of operator address
const PRIVATE_KEY: string =
  "24286f591a3021cfba637ddc706bd41a9dfd40f053d3a362be101461a8dd4f62";

//chainid
const CHAIN_ID = ChainId.MAINNET;

const MIN: string = "1000000000000";

const MAX: string = "90000000000000";

const decimal: number = 16; //18 - 1 BNB

const timer: number = 10000; //in ms.

export {
  RPC_URL,
  HODL,
  HODL_BURNER,
  OPERATOR_ADDRESS,
  PRIVATE_KEY,
  CHAIN_ID,
  MAX,
  MIN,
  decimal,
  timer,
};
