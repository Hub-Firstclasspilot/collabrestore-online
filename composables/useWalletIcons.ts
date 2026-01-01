import { 
  Wallet
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { svgs } from '@web3icons/core'

export const useWalletIcons = () => {
  // Wallet icon mappings to web3icons package paths
  // Format: walletId -> function to get the SVG string
  const getWalletIconSvg = (walletId: string): string | null => {
    const id = walletId.toLowerCase()
    
    try {
      // Map wallet IDs to web3icons package paths
      // Structure: svgs.wallets.branded.{walletName} or svgs.networks.branded.{networkName}
      const iconMap: Record<string, () => typeof svgs.wallets.branded.metamask> = {
        // Popular wallets
        'metamask': () => svgs.wallets.branded.metamask,
        'phantom': () => svgs.wallets.branded.phantom,
        'trust': () => svgs.wallets.branded.trust,
        'walletconnect': () => svgs.wallets.branded['wallet-connect'],
        'coinbase': () => svgs.wallets.branded.coinbase,
        'ledger': () => svgs.wallets.branded.ledger,
        'trezor': () => svgs.wallets.branded.trezor,
        'okx': () => svgs.wallets.branded.okx,
        'uniswap': () => svgs.exchanges.branded.uniswap,
        'rabby': () => svgs.wallets.branded.rabby,
        
        // Exchange wallets
        'binance': () => svgs.exchanges.branded.binance,
        'kucoin': () => svgs.exchanges.branded.kucoin,
        'gate': () => svgs.exchanges.branded['gate-io'],
        'bitget': () => svgs.exchanges.branded.bitget,
        'kraken': () => svgs.exchanges.branded.kraken,
        'bybit': () => svgs.exchanges.branded.bybit,
        'crypto.com': () => svgs.exchanges.branded['crypto-com'],
        
        // Software wallets
        'exodus': () => svgs.wallets.branded.exodus,
        'atomic': () => svgs.wallets.branded.atomic,
        'coinomi': () => svgs.wallets.branded.coin98,
        'guarda': () => svgs.wallets.branded.glow,
        'edge': () => svgs.wallets.branded['my-ether-wallet'],
        'blue': () => svgs.wallets.branded.blue,
        'electrum': () => svgs.wallets.branded.exodus,
        
        // Blockchain/Network icons (using tokens/networks)
        'polkadot': () => svgs.networks.branded.polkadot,
        'near': () => svgs.networks.branded['near-protocol'],
        'solana': () => svgs.networks.branded.solana,
        'avalanche': () => svgs.networks.branded.avalanche,
        'cosmos': () => svgs.networks.branded.cosmos,
        'algorand': () => svgs.networks.branded.algorand,
        'cardano': () => svgs.networks.branded.cardano,
        'ethereum': () => svgs.tokens.branded.eth,
        'bitcoin': () => svgs.tokens.branded.btc,
        'tron': () => svgs.networks.branded.tron,
        'polygon': () => svgs.networks.branded.polygon,
        'arbitrum': () => svgs.networks.branded['arbitrum-one'],
        'optimism': () => svgs.networks.branded.optimism,
        'bsc': () => svgs.networks.branded['binance-smart-chain'],
        
        // Chain-specific wallets (using network icons)
        'polkawallet': () => svgs.networks.branded.polkadot,
        'subwallet': () => svgs.networks.branded.polkadot,
        'talisman': () => svgs.networks.branded.polkadot,
        'keplr': () => svgs.networks.branded.cosmos,
        'cosmostation': () => svgs.networks.branded.cosmos,
        'leap': () => svgs.networks.branded.cosmos,
        'juno': () => svgs.networks.branded.cosmos,
        'pera': () => svgs.networks.branded.algorand,
        'myalgo': () => svgs.networks.branded.algorand,
        'algosigner': () => svgs.networks.branded.algorand,
        'nami': () => svgs.networks.branded.cardano,
        'eternl': () => svgs.networks.branded.cardano,
        'yoroi': () => svgs.networks.branded.cardano,
        'daedalus': () => svgs.networks.branded.cardano,
        'tronlink': () => svgs.networks.branded.tron,
        'tronwallet': () => svgs.networks.branded.tron,
        'sollet': () => svgs.networks.branded.solana,
        'solflare': () => svgs.networks.branded.solana,
        'slope': () => svgs.networks.branded.solana,
        'backpack': () => svgs.wallets.branded.backpack,
        'glow': () => svgs.networks.branded.solana,
        
        // DeFi wallets
        'argent': () => svgs.wallets.branded.argent,
        'zerion': () => svgs.wallets.branded.zerion,
        'rainbow': () => svgs.wallets.branded.rainbow,
        'sequence': () => svgs.wallets.branded.sequence,
        
        // Other popular wallets
        'tokenpocket': () => svgs.wallets.branded['token-pocket'],
        'coin98': () => svgs.wallets.branded.coin98,
        'celo': () => svgs.networks.branded.celo,
        'theta': () => svgs.networks.branded.theta,
        '1inch': () => svgs.exchanges.branded['1inch'],
        'xdefi': () => svgs.wallets.branded.xdefi,
        
        // Additional wallets
        'tonkeeper': () => svgs.networks.branded.ton,
        'tonhub': () => svgs.networks.branded.ton,
        'ton': () => svgs.networks.branded.ton,
        'flow': () => svgs.networks.branded.flow,
        'immutable': () => svgs.networks.branded.immutable,
        'starknet': () => svgs.networks.branded.starknet,
        'argent-x': () => svgs.wallets.branded.argent,
        'braavos': () => svgs.networks.branded.starknet,
        'zksync': () => svgs.networks.branded.zksync,
        'zkSync': () => svgs.networks.branded.zksync,
        'linea': () => svgs.networks.branded.linea,
        'scroll': () => svgs.networks.branded.scroll,
        'ronin': () => svgs.wallets.branded.ronin,
      }
      
      const iconGetter = iconMap[id]
      if (iconGetter) {
        const iconModule = iconGetter()
        // Access the default export which contains the SVG string
        if (iconModule && typeof iconModule === 'object' && 'default' in iconModule) {
          return (iconModule as { default: string }).default
        }
        // Fallback if structure is different
        return iconModule as any
      }
    } catch (error) {
      console.warn(`Icon not found for wallet: ${id}`, error)
    }
    
    return null
  }

  // Fallback icon component
  const defaultIcon = Wallet

  /**
   * Get fallback icon component
   */
  const getWalletIcon = (walletId: string): Component => {
    return defaultIcon
  }

  return {
    getWalletIconSvg,
    getWalletIcon,
  }
}
