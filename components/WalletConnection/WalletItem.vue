<template>
  <button
    @click="$emit('select')"
    class="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-dark-card hover:bg-gray-800 rounded transition-colors text-left border border-transparent hover:border-gray-700"
  >
    <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-dark-panel flex items-center justify-center flex-shrink-0 border border-gray-800 overflow-hidden">
      <!-- Use wallet icon SVG from web3icons package -->
      <div
        v-if="walletIconSvg"
        v-html="walletIconSvg"
        class="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
      />
      <!-- Use custom icon URL if provided -->
      <img
        v-else-if="wallet.icon && (wallet.icon.startsWith('http') || wallet.icon.startsWith('/'))"
        :src="wallet.icon"
        :alt="wallet.name"
        class="w-full h-full object-cover"
        @error="hasImageError = true"
      />
      <!-- Fallback to icon component -->
      <component
        v-else
        :is="walletIcon"
        class="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
      />
    </div>
    <span class="text-white font-medium text-xs sm:text-sm truncate">{{ wallet.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWalletIcons } from '~/composables/useWalletIcons'
import type { Wallet as WalletType } from '~/composables/useWallets'

const props = defineProps<{
  wallet: WalletType
}>()

defineEmits<{
  select: []
}>()

const { getWalletIconSvg, getWalletIcon } = useWalletIcons()
const walletIconSvg = computed(() => getWalletIconSvg(props.wallet.id))
const walletIcon = computed(() => getWalletIcon(props.wallet.id))
const hasImageError = ref(false)
</script>
