import express from "express";
import path from "path";
import initiateApp from "./utils/initiateWeb3.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(path.resolve(path.dirname("")), "index.html"));
});

app.get("/graph", async (req, res) => {
  let amountInBNB = "2000000000000";
  // await initiateApp(amountInBNB);
  const graph = await initiateApp(amountInBNB);
  const filteredData = graph.filter((f) => f !== null);
  res.json(filteredData);
});

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

  //graph has values
  //x - axis - block
  //y - axis - burnedamount

  console.log(`server running on ${PORT}`);
});
