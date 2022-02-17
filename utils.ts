import { ethers } from "ethers";
import {
  Fetcher,
  WETH,
  Token,
  Pair,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Percent,
} from "./node_modules/@nguyenphu27/sdk/dist/index";

// const {
//   WETH,
//   Token,
// } = require("./node_modules/@nguyenphu27/sdk/dist/entities/token");
import { RPC_URL, CHAIN_ID, HODL, MAX, MIN, decimal } from "./constants";

// const Pair = require("./node_modules/@nguyenphu27/sdk/dist/entities/pair");
// const Route = require("./node_modules/@nguyenphu27/sdk/dist/entities/route");

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

//const route = Promise.resolve(getTrade());

const route = getTrade();

async function getTrade() {
  const HODL_ERC20: Token = await Fetcher.fetchTokenData(
    CHAIN_ID,
    HODL,
    provider
  );

  const pair: Pair = await Fetcher.fetchPairData(
    WETH[CHAIN_ID],
    HODL_ERC20,
    provider
  );

  const route: Route = new Route([pair], WETH[CHAIN_ID]);
  const tradeAmount: TokenAmount = getRandomAmount(WETH[CHAIN_ID]);
  //console.log(route.input);
  const slippageTolerance: Percent = new Percent("50", "100");

  const trade1: Trade = new Trade(route, tradeAmount, TradeType.EXACT_INPUT);

  return {
    out: trade1.minimumAmountOut(slippageTolerance),
    in: trade1.maximumAmountIn(slippageTolerance),
  };
}

function getRandomAmount(erc20: Token) {
  const r = Math.random();
  const random = Math.round(r * (Number(MAX) - Number(MIN)) + Number(MIN));
  return new TokenAmount(erc20, random.toString().substring(0, decimal));
}

export default route;
