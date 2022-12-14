/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    opal: {
      url: 'https://rpc-opal.unique.network',
      accounts: [`0x${PRIVATE_KEY}`]
    },
    rc: {
      url: 'https://rpc-rc.unique.network',
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}