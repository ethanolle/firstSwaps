const { expect } = require('chai');
const { ethers } = require('hardhat');

const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f';
const WETH9 = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

describe('SwapExamples', () => {
  let swapExamples;
  let accounts;
  let weth;
  let dai;
  let usdc;

  before(async () => {
    accounts = await ethers.getSigners(1);

    const SwapExamples = await ethers.getContractFactory('SwapExamples');
    swapExamples = await SwapExamples.deploy();
    await swapExamples.deployed();

    weth = await ethers.getContractAt('IWETH', WETH9);
    dai = await ethers.getContractAt('IERC20', DAI);
    usdc = await ethers.getContractAt('IERC20', USDC);
  });

  it('swapExactInputSingle', async () => {
    const amountIn = 10n ** 18n;

    // Deposit WETH
    await weth.deposit({ value: amountIn });
    await weth.approve(swapExamples.address, amountIn);

    // Swap
    await swapExamples.swapExactInputSingle(amountIn);

    console.log('DAI balance', await dai.balanceOf(accounts[0].address));
  });
});
