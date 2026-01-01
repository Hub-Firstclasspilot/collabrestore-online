# Wallet Icons Setup

This project uses wallet icons from [web3icons.io](https://www.web3icons.io/?type=token&variant=branded).

## Downloading Icons

To download all wallet icons as SVG files locally:

```bash
npm run download-icons
```

This script will:
1. Create a `public/wallet-icons/` directory
2. Download all wallet icons from web3icons.io as SVG files
3. Save them locally for use in the application

## Using Local Icons

After downloading, update `composables/useWalletIcons.ts` to use local files:

Change this line in `getWalletIconUrl()`:
```typescript
// From:
return `https://web3icons.io/icons/${iconName}.svg`

// To:
return `/wallet-icons/${iconName}.svg`
```

## Current Setup

Currently, the application uses web3icons.io CDN directly for reliability. The icons are loaded from:
- `https://web3icons.io/icons/{iconName}.svg`

This ensures icons are always up-to-date and doesn't require local file management.

## Icon Mapping

The wallet IDs are mapped to web3icons.io icon names in `composables/useWalletIcons.ts`. If you need to add a new wallet:

1. Add the mapping to `walletIconMap`
2. Ensure the icon name matches the web3icons.io naming convention
3. Run the download script if using local icons

