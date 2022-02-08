import express from "express";
import initiateApp from "./utils/initiateWeb3.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  /**
   *
   * getBalance
   * getIterationPerDay
   * getMinValue
   * getMaxValue
   * Burn 1BNB per day
   * gettradeamount = 1 / iterationsperday
   * get amountsout for tradeethamount
   * checks for the blocks to reach nextIterate block
   * perform trade
   * transfer the bought token to zero address
   * emit the action performed.Amount iteration per day
   *
   *
   */
  let amountInBNB = "2000000000000";
  // await initiateApp(amountInBNB);
  const graph = setInterval(async () => await initiateApp(amountInBNB), 360000);

  //graph has values
  //x - axis - block
  //y - axis - burnedamount

  console.log(`server running on ${PORT}`);
});
