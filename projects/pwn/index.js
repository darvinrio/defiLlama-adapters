const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require("../helper/unwrapLPs");

const PWN_ALPHA_MAINNET = "0x45DB28b2d4878Ad124c037d4558AcF5Db3bBa6A5";
const PWN_BETA_MAINNET = "0xb98eFE56deCCeb1BeC9fAEeAF62500deb0953474";
const PWN_BETA_POLYGON = "0xaF0d978275a2e7e3109F8C6307Ffd281774C623E";
const PWN_BUNDLER_MAINNET = "0x19e3293196aee99BB3080f28B9D3b4ea7F232b8d";
const PWN_BUNDLER_POLYGON = "0xe52405604bF644349f57b36Ca6E85cf095faB8dA";
const PWN_BUNDLER_CRONOS = "0x973E09e96E64E4bf17e383a8A497Fb566284c707";
const PWN_BUNDLER_BASE = "0x6fD3f5439aB1C103599385929d5f4c19acdBd264";
const PWN_BUNDLER_OPTIMISM = "0x43Ffd9dF079451Fe7D16Ac2c51E13DF2a173B71E";
const PWN_BUNDLER_ARBITRUM = "0x448E3D0a4BAa00FE511a03E7B27177AeDE6d9636";
const PWN_BUNDLER_BSC = "0x4A75a527E97d853109aA6998a2B9E45a87A31e9f";
const PWN_BUNDLER_UNICHAIN = "0x354869495Fd916ADAFc0626C3d60115240dc06f1";
const PWN_BUNDLER_WORLD = "0xc0aCA216Aa936511b24Ff238F610B02bE54e10AD";
const PWN_BUNDLER_LINEA = "0xbe13866797bbdE2646FFBb58F102FcA91EFC88F1";
const PWN_BUNDLER_GNOSIS = "0x431131622e088Fb0F9828Ca05b62210fc9eDcC04";
const PWN_V1_SIMPLE_LOAN = "0x50160ff9c19fbE2B5643449e1A321cAc15af2b2C";
const PWN_V1_1_SIMPLE_LOAN_A = "0x57c88D78f6D08b5c88b4A3b7BbB0C1AA34c3280A"; // Mainnet, Polygon, Arbitrum, BSC
const PWN_V1_1_SIMPLE_LOAN_B = "0x4188C513fd94B0458715287570c832d9560bc08a"; // Cronos, Base, Optimism
const PWN_V1_2_SIMPLE_LOAN = "0x9A93AE395F09C6F350E3306aec592763c517072e";
const PWN_V1_2_2_SIMPLE_LOAN = "0x0773d5F2f7b3264a9Eb285F085aCCcC53d5aAa4F";
const PWN_V1_3_SIMPLE_LOAN = "0x719A69d0dc67bd3Aa7648D4694081B3c87952797";
const PWN_V1_3_SIMPLE_LOAN_UNICHAIN = "0x322e86E6c813d77a904C5B4aa808a13E0AD4412f";

module.exports = {
  misrepresentedTokens: true,
  methodology: `Sums up all the tokens deposited in the PWN Protocol. NFTs are resolved to their floor price using Chainlink price feeds. Note that NFTs are resolved only on Ethereum.`,
  ethereum: {
    tvl: sumTokensExport({
      owners: [
        PWN_ALPHA_MAINNET,
        PWN_BETA_MAINNET,
        PWN_BUNDLER_MAINNET,
        PWN_V1_SIMPLE_LOAN,
        PWN_V1_1_SIMPLE_LOAN_A,
        PWN_V1_2_SIMPLE_LOAN,
        PWN_V1_2_2_SIMPLE_LOAN,
        PWN_V1_3_SIMPLE_LOAN,
      ],
      resolveNFTs: true,
      resolveArtBlocks: true,
    }),
  },
  // resolveNFTs: true is currently unsupported on Polygon, Cronos, Base and Mantle
  // https://discord.com/channels/823822164956151810/823885412425793587/1139362819012304956
  polygon: {
    tvl: sumTokensExport({
      owners: [
        PWN_BETA_POLYGON,
        PWN_BUNDLER_POLYGON,
        PWN_V1_SIMPLE_LOAN,
        PWN_V1_1_SIMPLE_LOAN_A,
        PWN_V1_2_SIMPLE_LOAN,
        PWN_V1_2_2_SIMPLE_LOAN,
        PWN_V1_3_SIMPLE_LOAN,
      ],
      fetchCoValentTokens: true,
    }),
  },
  cronos: {
    tvl: sumTokensExport({
      owners: [PWN_BUNDLER_CRONOS, PWN_V1_1_SIMPLE_LOAN_B, PWN_V1_3_SIMPLE_LOAN], fetchCoValentTokens: true, tokenConfig: { ignoreMissingChain: true, },
    }),
  },
  base: {
    tvl: sumTokensExport({
      owners: [PWN_BUNDLER_BASE, PWN_V1_1_SIMPLE_LOAN_B, PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN], fetchCoValentTokens: true,
    }),
  },
  arbitrum: {
    tvl: sumTokensExport({
      owners: [PWN_BUNDLER_ARBITRUM, PWN_V1_1_SIMPLE_LOAN_A, PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN], fetchCoValentTokens: true,
    }),
  },
  optimism: {
    tvl: sumTokensExport({
      owners: [PWN_BUNDLER_OPTIMISM, PWN_V1_1_SIMPLE_LOAN_B, PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN], fetchCoValentTokens: true,
    }),
  },
  bsc: {
    tvl: sumTokensExport({
      owners: [PWN_BUNDLER_BSC, PWN_V1_1_SIMPLE_LOAN_A, PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN], fetchCoValentTokens: true,
    }),
  },
  linea: {
    tvl: sumTokensExport({
      owners: [PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN, PWN_BUNDLER_LINEA], fetchCoValentTokens: true,
    }),
  },
  xdai: {
    tvl: sumTokensExport({
      owners: [PWN_V1_2_SIMPLE_LOAN, PWN_V1_2_2_SIMPLE_LOAN, PWN_V1_3_SIMPLE_LOAN, PWN_BUNDLER_GNOSIS], fetchCoValentTokens: true,
    }),
  },
  unichain: {
    tvl: sumTokensExport({
      owners: [PWN_V1_3_SIMPLE_LOAN_UNICHAIN, PWN_BUNDLER_UNICHAIN], fetchCoValentTokens: true, tokenConfig: { ignoreMissingChain: true, }
    }),
  },
  wc: {
    tvl: sumTokensExport({
      owners: [PWN_V1_3_SIMPLE_LOAN, PWN_BUNDLER_WORLD], fetchCoValentTokens: true, tokenConfig: { ignoreMissingChain: true, }
    }),
  },
  mantle: { tvl: () => ({}) },
};
