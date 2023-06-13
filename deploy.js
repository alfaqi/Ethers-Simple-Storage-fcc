const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf-8");
  // let wallet = await ethers.Wallet.fromEncryptedJson(
  //   encryptedJson,
  //   process.env.PRIVATE_KEY_PASSWORD
  // );
  // wallet = wallet.connect(provider);
  const abi = fs.readFileSync("./SimpleStorage.abi.json", "utf-8");

  const bin = fs.readFileSync("./SimpleStorage.bin.json", "utf-8");

  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);

  const contract = await contractFactory.deploy();
  // console.log(contract);
  const number = await contract.retreve();
  console.log(number.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
