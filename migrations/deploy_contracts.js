const SeaSwapV2Factory = artifacts.require("SeaSwapV2Factory");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
  const seaSwapWallet = accounts[0];
  await deployer.deploy(SeaSwapV2Factory, seaSwapWallet);

};