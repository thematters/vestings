require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-abi-exporter");
require("hardhat-docgen");
require("hardhat-tracer");
require("hardhat-gas-reporter");
require("solidity-coverage");

const etherscanApiKey = getEtherscanApiKey();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: mainnetNetworkConfig(),
    goerli: goerliNetworkConfig(),
    bscMainnet: bscMainnetNetworkConfig(),
    bscTestnet: bscTestnetNetworkConfig(),
    polygonMumbai: polygonMumbaiNetworkConfig(),
    polygonMainnet: polygonMainnetNetworkConfig(),
  },
  abiExporter: {
    path: "./build/abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
  docgen: {
    path: "./docs",
    clear: true,
    runOnCompile: true,
  },
  gasReporter: {
    currency: "USD",
  },
  etherscan: {
    apiKey: `${etherscanApiKey}`,
  },
};

function mainnetNetworkConfig() {
  let url = "https://mainnet.infura.io/v3/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.MAINNET_ENDPOINT) {
    url = `${process.env.MAINNET_ENDPOINT}`;
  }

  if (process.env.MAINNET_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.MAINNET_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

function goerliNetworkConfig() {
  let url = "https://goerli.infura.io/v3/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.GOERLI_ENDPOINT) {
    url = `${process.env.GOERLI_ENDPOINT}`;
  }

  if (process.env.GOERLI_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.GOERLI_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

function bscMainnetNetworkConfig() {
  let url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.BSC_MAINNET_ENDPOINT) {
    url = `${process.env.BSC_MAINNET_ENDPOINT}`;
  }

  if (process.env.BSC_MAINNET_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.BSC_MAINNET_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

function bscTestnetNetworkConfig() {
  let url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.BSC_TESTNET_ENDPOINT) {
    url = `${process.env.BSC_TESTNET_ENDPOINT}`;
  }

  if (process.env.BSC_TESTNET_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.BSC_TESTNET_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}


function polygonMumbaiNetworkConfig() {
  let url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.POLYGON_MUMBAI_ENDPOINT) {
    url = `${process.env.POLYGON_MUMBAI_ENDPOINT}`;
  }

  console.log({POLYGON_MUMBAI_ENDPOINT: process.env.POLYGON_MUMBAI_ENDPOINT,POLYGON_MUMBAI_PRIVATE_KEY: process.env.POLYGON_MUMBAI_PRIVATE_KEY})

  if (process.env.POLYGON_MUMBAI_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.POLYGON_MUMBAI_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

function polygonMainnetNetworkConfig() {
  let url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.POLYGON_MAINNET_ENDPOINT) {
    url = `${process.env.POLYGON_MAINNET_ENDPOINT}`;
  }

  if (process.env.POLYGON_MAINNET_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.POLYGON_MAINNET_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}


function getEtherscanApiKey() {
  let apiKey = "";
  if (process.env.ETHERSCAN_API_KEY) {
    apiKey = `${process.env.ETHERSCAN_API_KEY}`;
  }
  return apiKey;
}
