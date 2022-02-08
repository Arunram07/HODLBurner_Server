const HODLB = artifacts.require("HODLBurner");
const PancakeswapRouter = "0xDE2Db97D54a3c3B008a097B2260633E6cA7DB1AF";
const WBNB = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
const HODL = "0xba9Ded605E6a828D57aD2919FC8693815a5fB9Fa";
const zero = "0x000000000000000000000000000000000000dEaD";

module.exports = function (deployer) {
  deployer.deploy(HODLB, HODL, PancakeswapRouter, WBNB, zero);
};
