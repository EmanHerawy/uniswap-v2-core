const UniswapV2Factory = artifacts.require("UniswapV2Factory");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
  const seaSwapWallet = accounts[0];
  await deployer.deploy(UniswapV2Factory, seaSwapWallet);

};