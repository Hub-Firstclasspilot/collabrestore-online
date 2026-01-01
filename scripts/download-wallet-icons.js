/**
 * Script to download wallet icons from web3icons.io
 * Run with: node scripts/download-wallet-icons.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const walletIcons = [
  'metamask', 'phantom', 'trustwallet', 'walletconnect', 'coinbase', 'ledger', 'trezor', 'okx', 'uniswap', 'rabby',
  'binance', 'kucoin', 'gate', 'bitget', 'kraken', 'coindcx', 'coinhako', 'coincheck', 'bitstamp', 'wazirx',
  'indodax', 'zebpay', 'huobi', 'bybit', 'cryptocom', 'exodus', 'atomic', 'coinomi', 'guarda', 'edge',
  'bluewallet', 'electrum', 'phoenix', 'samourai', 'wasabi', 'sparrow', 'specter', 'muun', 'breez', 'blixt',
  'walletofsatoshi', 'polkadot', 'near', 'solana', 'avalanche', 'cosmos', 'algorand', 'cardano', 'ethereum',
  'bitcoin', 'tron', 'polygon', 'arbitrum', 'optimism', 'binancesmartchain', 'argent', 'gnosis', 'zerion',
  'rainbow', 'sequence', 'portis', 'torus', 'magic', 'tokenpocket', 'imtoken', 'bitkeep', 'safepal', 'onekey',
  'mathwallet', 'coin98', 'bitpie', 'gamestop', 'xportal', 'enjin', 'dapper', 'valora', 'celo', 'theta',
  'loopring', '1inch', 'debank', 'gala', 'wemix', 'feather', 'bitgo', 'fireblocks', 'casa', 'brave',
  'opera', 'xdefi', 'frame', 'tokenary', 'ton', 'vechain', 'hedera', 'icon', 'flow', 'immutablex',
  'starknet', 'zksync', 'linea', 'scroll', 'ronin', 'klever', 'horizon', 'cake', 'begin', 'wombat',
  'proton', 'energyweb', 'chiliz', 'nuls', 'wax', 'steem', 'staratlas', 'waves', 'umbrel', 'fullynoded',
  'mynode', 'caravan', 'eclair', 'lightning', 'river', 'strike', 'opendime', 'ngrave', 'jade', 'passport',
  'coldcard', 'tangem', 'zengo', 'status', 'mycrypto', 'myetherwallet'
]

const iconsDir = path.join(__dirname, '..', 'public', 'wallet-icons')

// Create directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
  console.log(`Created directory: ${iconsDir}`)
}

console.log('Downloading wallet icons from web3icons.io...')
console.log(`Total icons to download: ${walletIcons.length}`)

let downloaded = 0
let failed = 0

for (const iconName of walletIcons) {
  try {
    const url = `https://web3icons.io/icons/${iconName}.svg`
    const response = await fetch(url)
    
    if (response.ok) {
      const svgContent = await response.text()
      const filePath = path.join(iconsDir, `${iconName}.svg`)
      fs.writeFileSync(filePath, svgContent, 'utf-8')
      downloaded++
      console.log(`✓ Downloaded: ${iconName}.svg`)
    } else {
      console.log(`✗ Failed to download: ${iconName}.svg (Status: ${response.status})`)
      failed++
    }
  } catch (error) {
    console.log(`✗ Error downloading ${iconName}.svg:`, error.message)
    failed++
  }
  
  // Small delay to avoid rate limiting
  await new Promise(resolve => setTimeout(resolve, 100))
}

console.log(`\nDownload complete!`)
console.log(`Successfully downloaded: ${downloaded}`)
console.log(`Failed: ${failed}`)

