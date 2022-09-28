require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.7.6',
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.g.alchemy.com/v2/9QLTkuUl0R5-EmHumg6AHKvh6F3kr8z7',
      },
    },
  },
};
