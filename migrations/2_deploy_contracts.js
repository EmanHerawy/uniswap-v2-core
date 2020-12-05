const SeaSwapV2Factory = artifacts.require("SeaSwapV2Factory");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
  const feeTo = "0xc0d8F541Ab8B71F20c10261818F2F401e8194049";
  const seaSwapWallet = accounts[0];
   await deployer.deploy(SeaSwapV2Factory, seaSwapWallet);
  const seaSwapInstance = await SeaSwapV2Factory.deployed();
  const txt2 = await seaSwapInstance.setFeeTo(feeTo);
  console.log({txt2});
};