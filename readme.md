## Deploy contract and mint Nft with hardhat and alchemy on Goerli Testnet

### Pre-requires
1. Metamask private key
2. [Alchemy api key](https://www.alchemy.com/). Need for goerli

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
3. Compile contracts `npx hardhat compile`

### Steps for goerli

1. Deploy example contract `npx hardhat --network goerli run scripts/deploy.js`
2. Add contract address to .env `CONTRACT_ADDRESS=YOR_CONTRACT_ADDRESS`
3. Run contract mintToken script `node scripts/mint-nft.js`

### Steps for rc/opal

1. Deploy contract for rc `npx hardhat --network rc run scripts/rc-deploy-contract.js`. Deploy contract for opal`npx hardhat --network opal run scripts/rc-deploy-contract.js`
2. Add contract address to .env `CONTRACT_ADDRESS=YOR_CONTRACT_ADDRESS`
3. Mint collection and token script `node scripts/rc-mint-collection-and-token.js`

### Links
[Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview)

[Alchemy](https://www.alchemy.com/)

[Goerli faucet](https://goerlifaucet.com/)

[Opal faucet](https://t.me/unique2faucet_opal_bot)

[How to export an account's private key from metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key#:~:text=On%20the%20account%20page%2C%20click,click%20%E2%80%9CConfirm%E2%80%9D%20to%20proceed.)