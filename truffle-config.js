module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xf4a7f2c6bbe40a67e74f1b44bed16c6302eb07f6", // default address to use for any transaction Truffle makes during migrations
      network_id: 4
    }
  },
  compilers: {
    solc: {
      // version: "0.5.25", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true, // Use "0.5.3" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
