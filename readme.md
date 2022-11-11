## Deploy contract and mint Nft with hardhat and alchemy on Goerli Testnet

### Pre-requires
1. Metamask
2. [Alchemy api key](https://www.alchemy.com/). Once you’ve created an Alchemy account, you can generate an API key by creating an app. This will allow us to make requests to the Goerli test network.

### Env example
```
ALCHEMY_API_URL="https://eth-goerli.g.alchemy.com/v2/ALCHEMY_API_KEY"
PRIVATE_KEY="WALET_PRIVATE_KEY"
PUBLIC_KEY="YOR_PUBLIC_ADDRESS"
CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

### Steps

1. npm i
2. Create .env file
3. Compile contract `npx hardhat compile`

### Steps for goerli

1. Deploy example contract ` npx hardhat --network goerli run scripts/deploy.js`
2. Add contract address to .env `CONTRACT_ADDRESS=YOR_CONTRACT_ADDRESS`
3. Run contract mintToken script `node scripts/mint-nft.js`

### Steps for opal

1. Deploy example contract ` npx hardhat --network opal run scripts/deploy.js`
2. Add contract address to .env `CONTRACT_ADDRESS=YOR_CONTRACT_ADDRESS`
3. Run contract mintToken script `node scripts/mint-nft-opal.js`

### Links
[Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview)

[Alchemy](https://www.alchemy.com/)

[Goerli faucet](https://goerlifaucet.com/)
