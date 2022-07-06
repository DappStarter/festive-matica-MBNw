require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note remain company harvest brand equal gentle'; 
let testAccounts = [
"0x4799f31f0850bf3ef708f70fd2d31e35ab2f231e58ae1041f29ffed10b318e60",
"0x71adc4a836dcc0c42abba4e1ffaf66db0a71ddfad81b638e866aa131a93d7364",
"0xd765437d00f03e8cb3874e69ad019101765357a410fba4a5190d292c856c3c00",
"0x3660ee9b57a7a67566f9340c8f87af399d11c088189375fa2c7dbc91eca72271",
"0xba268757c82d10065b135a3350c1643a6d665aa25df0334d92453432dacd0bb3",
"0x7fe287ad74833c1570e19b9b4e11372fd2f2e303ba766f012d5a4b200288eafc",
"0x5d0cc189e762c9bdb2331f619ac094ae7dba815ffc97c65c540856913c631de4",
"0x8f697aefd81ed9f4ee252df218a19ea334d49ec80951899baf0c0c8b551a6409",
"0x359206ae9cd0dc92137083fe3dab3519b8fb24859f2a3b1aced3caf8167245e4",
"0x5e2e7a35f09b896c5e6e0875afc82dd0ce0e6ba7178cd433b9d94aeda8822081"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

