export interface Wallet {
  id: string
  name: string
  icon?: string
  isPopular?: boolean
}

export const useWallets = () => {
  const wallets: Wallet[] = [
    // Popular wallets
    { id: 'metamask', name: 'MetaMask', isPopular: true },
    { id: 'phantom', name: 'Phantom Wallet', isPopular: true },
    { id: 'trust', name: 'Trust Wallet', isPopular: true },
    { id: 'walletconnect', name: 'Wallet Connect', isPopular: true },
    { id: 'coinbase', name: 'Coinbase Wallet', isPopular: true },
    { id: 'ledger', name: 'Ledger', isPopular: true },
    { id: 'trezor', name: 'Trezor Wallet', isPopular: true },
    { id: 'okx', name: 'OKX Wallet', isPopular: true },
    { id: 'uniswap', name: 'Uniswap Wallet', isPopular: true },
    { id: 'rabby', name: 'Rabby Wallet', isPopular: true },
    
    // Exchange wallets
    { id: 'binance', name: 'Binance' },
    { id: 'kucoin', name: 'KuCoin' },
    { id: 'gate', name: 'Gate.io' },
    { id: 'bitget', name: 'Bitget' },
    { id: 'kraken', name: 'Kraken' },
    { id: 'bybit', name: 'Bybit' },
    { id: 'crypto.com', name: 'Crypto.com' },
    { id: '1inch', name: '1inch' },
    
    // Software wallets
    { id: 'exodus', name: 'Exodus Wallet' },
    { id: 'atomic', name: 'Atomic Wallet' },
    { id: 'blue', name: 'Blue Wallet' },
    { id: 'electrum', name: 'Electrum Wallet' },
    
    // Blockchain/Network wallets
    { id: 'polkadot', name: 'Polkadot.js' },
    { id: 'near', name: 'Near Wallet' },
    { id: 'solana', name: 'Solana' },
    { id: 'avalanche', name: 'Avalanche' },
    { id: 'cosmos', name: 'Cosmos' },
    { id: 'algorand', name: 'Algorand' },
    { id: 'cardano', name: 'Cardano' },
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'bitcoin', name: 'Bitcoin' },
    { id: 'tron', name: 'Tron' },
    { id: 'polygon', name: 'Polygon' },
    { id: 'arbitrum', name: 'Arbitrum' },
    { id: 'optimism', name: 'Optimism' },
    { id: 'bsc', name: 'Binance Smart Chain' },
    
    // Chain-specific wallets
    { id: 'polkawallet', name: 'Polkawallet' },
    { id: 'keplr', name: 'Keplr' },
    { id: 'cosmostation', name: 'Cosmostation' },
    { id: 'leap', name: 'Leap Wallet' },
    { id: 'juno', name: 'Juno' },
    { id: 'pera', name: 'Pera Wallet' },
    { id: 'myalgo', name: 'MyAlgo' },
    { id: 'algosigner', name: 'AlgoSigner' },
    { id: 'nami', name: 'Nami' },
    { id: 'eternl', name: 'Eternl' },
    { id: 'tronlink', name: 'TronLink' },
    { id: 'tronwallet', name: 'TronWallet' },
    { id: 'sollet', name: 'Sollet' },
    { id: 'solflare', name: 'Solflare' },
    { id: 'slope', name: 'Slope' },
    { id: 'backpack', name: 'Backpack' },
    { id: 'glow', name: 'Glow' },
    
    // DeFi wallets
    { id: 'argent', name: 'Argent' },
    { id: 'zerion', name: 'Zerion Wallet' },
    { id: 'rainbow', name: 'Rainbow' },
    { id: 'sequence', name: 'Sequence' },
    
    // Other wallets
    { id: 'tokenpocket', name: 'TokenPocket' },
    { id: 'coin98', name: 'Coin98' },
    { id: 'celo', name: 'Celo' },
    { id: 'theta', name: 'Theta' },
    { id: 'xdefi', name: 'XDeFi' },
    { id: 'tonkeeper', name: 'Tonkeeper' },
    { id: 'tonhub', name: 'Tonhub' },
    { id: 'flow', name: 'Flow' },
    { id: 'immutable', name: 'ImmutableX' },
    { id: 'starknet', name: 'Starknet' },
    { id: 'argent-x', name: 'Argent X' },
    { id: 'braavos', name: 'Braavos' },
    { id: 'zksync', name: 'zkSync' },
    { id: 'linea', name: 'Linea' },
    { id: 'scroll', name: 'Scroll' },
    { id: 'ronin', name: 'Ronin Wallet' },
  ]

  const getPopularWallets = () => wallets.filter(w => w.isPopular)
  const getAllWallets = () => wallets
  const searchWallets = (query: string) => {
    if (!query) return wallets
    const lowerQuery = query.toLowerCase()
    return wallets.filter(w => w.name.toLowerCase().includes(lowerQuery))
  }

  return {
    wallets,
    getPopularWallets,
    getAllWallets,
    searchWallets,
  }
}

