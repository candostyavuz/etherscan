const { Wallet, utils, providers: { JsonRpcProvider } } = require('ethers');
const provider = new JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/p3sMAXf2RxF4rmv6r6HOnRi0POHUd15s");

async function getLatestBlock() {
    const lastBlockNum = await provider.getBlockNumber();
    console.log(lastBlockNum);
    const currentBlock = await provider.getBlock(lastBlockNum);
    console.log(currentBlock);
    return currentBlock;
};

module.exports = {
    getLatestBlock
}