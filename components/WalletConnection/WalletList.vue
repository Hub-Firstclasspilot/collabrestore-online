<template>
  <div class="flex flex-col h-full">
    <div class="flex gap-2 mb-4">
      <TabButton :is-active="activeTab === 'reown'" @click="activeTab = 'reown'">
        reown
      </TabButton>
      <TabButton :is-active="activeTab === 'manual'" @click="activeTab = 'manual'">
        Manual Kit
      </TabButton>
    </div>

    <div class="mb-3 sm:mb-4">
      <p class="text-white font-medium mb-2 sm:mb-3 text-xs sm:text-sm">Popular:</p>
      <div class="space-y-1.5 sm:space-y-2 max-h-[15vh] sm:max-h-[20vh] overflow-y-auto">
        <WalletItem
          v-for="wallet in popularWallets"
          :key="wallet.id"
          :wallet="wallet"
          @select="handleWalletSelect(wallet)"
        />
      </div>
    </div>

    <div class="mb-3">
      <SearchInput v-model="searchQuery" />
    </div>

    <div class="flex-1 overflow-y-auto space-y-2 pr-2">
      <WalletItem
        v-for="wallet in filteredWallets"
        :key="wallet.id"
        :wallet="wallet"
        @select="handleWalletSelect(wallet)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWallets } from '~/composables/useWallets'

const { getPopularWallets, getAllWallets, searchWallets } = useWallets()

const activeTab = ref<'reown' | 'manual'>('reown')
const searchQuery = ref('')

const popularWallets = computed(() => getPopularWallets())

const filteredWallets = computed(() => {
  if (!searchQuery.value) {
    return getAllWallets().filter(w => !w.isPopular)
  }
  return searchWallets(searchQuery.value).filter(w => !w.isPopular)
})

const emit = defineEmits<{
  'wallet-selected': []
}>()

const handleWalletSelect = (wallet: any) => {
  console.log('Selected wallet:', wallet.name)
  emit('wallet-selected')
}
</script>

