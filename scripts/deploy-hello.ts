import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'

async function deploy() {
  // factory
  const HelloWorld = await ethers.getContractFactory('HelloWorld')
  // deploy to network
  const hello = await HelloWorld.deploy()
  // wait for deployment
  await hello.deployed()

  return hello
}

// @ts-ignore
async function sayHello(hello) {
  console.log('Say Hello:', await hello.hello())
}
// run script
deploy().then(sayHello)
