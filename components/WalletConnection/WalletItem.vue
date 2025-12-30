<template>
  <button
    @click="$emit('select')"
    class="w-full flex items-center gap-3 px-3 py-2 bg-dark-card hover:bg-gray-800 rounded transition-colors text-left border border-transparent hover:border-gray-700"
  >
    <div class="w-8 h-8 rounded-full bg-dark-panel flex items-center justify-center flex-shrink-0 border border-gray-800 overflow-hidden">
      <!-- Use image if wallet has icon URL -->
      <img
        v-if="wallet.icon && (wallet.icon.startsWith('http') || wallet.icon.startsWith('/'))"
        :src="wallet.icon"
        :alt="wallet.name"
        class="w-full h-full object-cover"
      />
      <!-- Use icon component otherwise -->
      <component
        v-else
        :is="walletIcon"
        class="w-4 h-4 text-gray-500"
      />
    </div>
    <span class="text-white font-medium text-sm truncate">{{ wallet.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWalletIcons } from '~/composables/useWalletIcons'
import type { Wallet as WalletType } from '~/composables/useWallets'

const props = defineProps<{
  wallet: WalletType
}>()

defineEmits<{
  select: []
}>()

const { getWalletIcon } = useWalletIcons()
const walletIcon = computed(() => getWalletIcon(props.wallet.id))
</script>
