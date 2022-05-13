import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('hello world', () => {
  it('should say hi', async () => {
    // get the contract factory ready for deployment
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    // deploy the helloworld contract
    const hello = await HelloWorld.deploy()
    // await for confirmation of the deployed contract (consensus)
    await hello.deployed()
    // test
    expect(await hello.hello()).to.equal('Hello, World')
  })
})
