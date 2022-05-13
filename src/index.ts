import { ethers } from 'ethers'

async function hasSigners(): Promise<boolean> {
  //@ts-ignore
  const metamask = window.ethereum
  const signers = await (metamask.request({
    method: 'eth_accounts',
  }) as Promise<string[]>)
  return signers.length > 0
}

async function requestAccess(): Promise<boolean> {
  //@ts-ignore
  const result = (await window.ethereum.request({
    method: 'eth_requestAccounts',
  })) as string[]
  return result && result.length > 0
}

async function getContract() {
  const address = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512' // local deployment of the helloworld contract

  if (!(await hasSigners()) && !(await requestAccess())) {
    console.log('You are in trouble, no one wants to play')
  }

  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum) // Metamask is the provider window.ethereum
  const contract = new ethers.Contract(
    address,
    ['function hello() public pure returns(string memory)'], // abi
    provider
  )

  console.log('We have done it, time to call')
  console.log(await contract.hello())
}

getContract()
