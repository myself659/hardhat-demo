import { ethers } from "hardhat";

async function main() {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeterContract = await Greeter.deploy('Hello, Hardhat!');
    await greeterContract.deployed();

    console.log('Greeter deployed to:', greeterContract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
