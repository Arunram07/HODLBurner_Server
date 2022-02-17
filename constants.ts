import { ChainId } from "@nguyenphu27/sdk";

//rpc node endpoint url
const RPC_URL: string = "https://data-seed-prebsc-1-s1.binance.org:8545/";

//pancakeswap router address
const PANCAKE_ROUTER: string = "0xDE2Db97D54a3c3B008a097B2260633E6cA7DB1AF";

//hodl erc20 address
const HODL: string = "0xba9Ded605E6a828D57aD2919FC8693815a5fB9Fa";

//hodl burner contract address
const HODL_BURNER: string = "0xa45FEb63d96258CBf384bF21289bf8b80aC1f0cB";

//operator address
const OPERATOR_ADDRESS: string = "0x9F9bA619216F7B104fb309245eaefc388F642B16";

//private key of operator address
const PRIVATE_KEY: string =
  "0ea9e2d55c083444976fcf1e878131c32c09789c2b713b1d5f14f8ecc843a9db";

//chainid
const CHAIN_ID = ChainId.TESTNET;

const MIN: string = "1000000000000";

const MAX: string = "90000000000000";

const decimal: number = 12; //18 - 1 BNB

const timer: number = 10000; //in ms.

export {
  RPC_URL,
  PANCAKE_ROUTER,
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
