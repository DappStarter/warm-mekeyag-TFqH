require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food stone remember nominee club grunt light army genuine'; 
let testAccounts = [
"0xdfb08a8420c273a54bb52bcff97f4af38a0422ba7783a89fc9e559e6f2bfaa27",
"0x03a5f6165e8b656dc4c0b565f5821a06ff393fc096a8cbe66cb778dfca7f87ec",
"0xa6ad6bfc4c64494024f4e74628081ba694366ec7627a4b0123c2ce5baa977ca4",
"0x1d8aae835293a42f7e491560fba5a8ad03ef5a4d7d060c865b19ab18703d011a",
"0xcd92f127e3519bba7dc2ff10e1e87026127864a4a40108296a12655bcbbac37c",
"0x76fa38e12159dd2c0d9b71a88c770753119c09c5e522cff1ce1710dcee367631",
"0x8c51f2a96e0771e06348c7d6adb6c95f8826c134790a25672178da61eaff91a3",
"0x7fe00097755118da9ff51f92bba08ab3dc0bde25f53421fbeb3f95aed062df18",
"0xa367ad9c67c8e5d1912c853cc9627f2d8ed218e3e83885e25c8f4f20ad54e8d1",
"0x738412798f325e3b67925293293d8d6262c4702f976045543669c22658ef1f0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

