const { sumTokens2, PANCAKE_NFT_ADDRESS } = require('../helper/unwrapLPs')
const ADDRESSES = require('../helper/coreAssets.json')

const earnETHVault = '0x9Ed15383940CC380fAEF0a75edacE507cC775f22';
const pancakeswapMasterChef = '0x556B9306565093C855AEA9AE92A594704c2Cd59e'

const ethTokens = [
  '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0', // rswETH
  '0xf951E335afb289353dc249e82926178EaC7DEd78', // swETH
  ADDRESSES.ethereum.WSTETH, // wstETH
  ADDRESSES.ethereum.WETH, // WETH
  "0x9Ba021B0a9b958B5E75cE9f6dff97C7eE52cb3E6", // apxETH
  "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6", // pxETH
  "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee", // weETH
  "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110", // ezETH
  "0xC329400492c6ff2438472D4651Ad17389fCb843a", // sym_wstETH
  "0x38B86004842D3FA4596f0b7A0b53DE90745Ab654", // sym_swETH
  "0xB26ff591F44b04E78de18f43B46f8b70C6676984", // sym_cbETH
  "0x5fD13359Ba15A84B76f7F87568309040176167cd", // Amphor_ETH
  "0x8a053350ca5F9352a16deD26ab333e2D251DAd7c", // mmETH
  "0x32bd822d615A3658A68b6fDD30c2fcb2C996D678", // mswETH
  "0x49446A0874197839D15395B908328a74ccc96Bc0", // mstETH
  "0x997949eEA781c04E4801d9c0902540236A317B07", // PT_rstETH_25JUL2024
  "0x6ee2b5E19ECBa773a352E5B21415Dc419A700d1d", // PT_weETH_26DEC2024
  "0xf7906F274c174A52d444175729E3fa98f9bde285", // PT_ezETH_26DEC2024
  "0x5cb12D56F5346a016DBBA8CA90635d82e6D1bcEa", // PT_rswETH_27JUN2024
  "0xc69Ad9baB1dEE23F4605a82b3354F8E40d1E5966", // PT_weETH_27JUN2024
]

const pendleLPTokens = [
  "0x7C7FbB2d11803C35Aa3e283985237aD27f64406B", //rswETH 26Dec2024
  "0x0e1C5509B503358eA1Dac119C1D413e28Cc4b303", //swETH 26December2024
]

const vaultTokens = [
  "0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0", // Re7 WETH
]

const swellchainTokens = [
  '0x18d33689AE5d02649a859A1CF16c9f0563975258', // rswETH
  '0x09341022ea237a4DB1644DE7CCf8FA0e489D85B7', // swETH
]

const tokens = [
  ...ethTokens,
  ...pendleLPTokens,
  ...vaultTokens,
]


const ethTvl = async (api) => {
  return sumTokens2({
    api,
    owner: earnETHVault, tokens,
    uniV3nftsAndOwners: [[PANCAKE_NFT_ADDRESS, earnETHVault]],
    uniV3ExtraConfig: { nftIdFetcher: pancakeswapMasterChef }
  })
}

const swellchainTvl = async (api) => {
  return sumTokens2({
    api,
    owner: earnETHVault, swellchainTokens
  })
}

module.exports = {
  methodology: 'TVL represents the sum of tokens deposited in the vault + LP positions',
  doublecounted: true,
  ethereum: { ethTvl },
  swellchain: { swellchainTvl }
}