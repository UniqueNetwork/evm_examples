require("dotenv").config()
const { PUBLIC_KEY, PRIVATE_KEY, CONTRACT_ADDRESS, PROVIDER } = process.env
const ethers = require("ethers")
const contractJson = require("../artifacts/contracts/UniqContract.sol/CollectionManager.json")
const {CollectionHelpersFactory} = require("@unique-nft/solidity-interfaces");

const providerRpc = PROVIDER === "OPAL" ? "https://rpc-opal.unique.network" : "https://rpc-rc.unique.network";

async function createCollectionAndMintToken(signerAddress, collectionName, collectionDescription, symbol, cid) {
    const provider = new ethers.providers.JsonRpcProvider(providerRpc)
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractJson.abi, signer)

    const collectionHelpers = await CollectionHelpersFactory(signer)
    console.log('Start transaction: create collection!!')
    const transaction = await contract.createCollection(
        signerAddress,
        collectionName,
        collectionDescription,
        symbol,
        cid,
        {value: await collectionHelpers.collectionCreationFee()}
    )
    const txCollection = await transaction.wait()
    const collectionAddress = txCollection.events?.[0].args?.collectionId

    console.log(`Collection created. Address ${collectionAddress}`)
    console.log('Start mint token')
    const mintTokenTransaction = await contract.mintWithTokenURI(
        collectionAddress,
        cid,
    )

    const mintTokenBlock = await mintTokenTransaction.wait()

    const tokenId = mintTokenBlock.events?.[0].args?.tokenId.toNumber()
    console.log(`Token for collection created. Token id is ${tokenId}`)
    console.log(`Block number ${mintTokenBlock.blockNumber}`)

    return true;
}

const run = async () => {
    try {
        await createCollectionAndMintToken(
            PUBLIC_KEY,
            'WSRC3_ERC721',
            'description',
            'MI22',
            'ipfs://QmZ8Syn28bEhZJKYeZCxUTM5Ut74ccKKDbQCqk5AuYsEnp',
        )
    } catch (e) {
        console.error('Run script error: ', e);
    }
}

(async () => {
    await run();
})()