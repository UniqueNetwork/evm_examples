require("dotenv").config()
const { PUBLIC_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env
const ethers = require("ethers")
const contractJson = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")

async function mintNftOpal(ipfsUrl) {
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-opal.unique.network")
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractJson.abi, signer)
    const transaction = await contract.mintNFT(PUBLIC_KEY, ipfsUrl)
    await transaction.wait()

    return true;
}

const cid = 'QmZVpSsjvxev3C8Dv4E44fSp8gGMP6aoLMp56HmZi5Wkxh'

mintNftOpal(`ipfs://${cid}`)
