const SeaSwapV2Factory = artifacts.require("SeaSwapV2Factory");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
  /** Base Account: 0x3abd82891c05Da067821DBf2a7887A4C5752dEB4
Fees Account: 0x2b53A5b4993Af54D0B815e023f730e544A5188A9*/
  const feeTo = "0x2b53A5b4993Af54D0B815e023f730e544A5188A9";
  const feeBase = "0x3abd82891c05Da067821DBf2a7887A4C5752dEB4";
  const seaSwapWallet = accounts[0];
   await deployer.deploy(SeaSwapV2Factory, feeBase,feeTo);
  // const seaSwapInstance = await SeaSwapV2Factory.deployed();
  // const txt2 = await seaSwapInstance.setFeeTo(feeTo);
  // console.log({txt2});
};