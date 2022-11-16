const {ethers} = require("hardhat");

async function main() {
    const CollectionManager = await ethers.getContractFactory("CollectionManager")

    const contract = await CollectionManager.deploy()
    await contract.deployed()
    console.log("Contract deployed to address:", contract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
