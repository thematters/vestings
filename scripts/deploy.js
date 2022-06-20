require('dotenv').config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // const Token = await ethers.getContractFactory("Token");
  // const token = await Token.deploy(
  //   "Test Token",
  //   "TT",
  //   "1000000000000000000000000"
  // );
  let tokenAddress = '';
  if (process.env.HARDHAT_NETWORK === 'polygonMumbai') {
    tokenAddress = process.env.POLYGON_MUMBAI_TOKEN;
  } else if (process.env.HARDHAT_NETWORK === 'polygonMainnet') {
    tokenAddress = process.env.POLYGON_MAINNET_TOKEN;
  }

  console.log("Token address:", tokenAddress);

  const TokenVesting = await ethers.getContractFactory("TokenVesting");
  const tokenVesting = await TokenVesting.deploy(tokenAddress);
  console.log("TokenVesting address:", tokenVesting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
