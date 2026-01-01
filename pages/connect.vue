<template>
  <div class="min-h-screen bg-dark-bg flex items-center justify-center p-2 sm:p-4">
    <div class="w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[50vw] h-auto sm:h-[50vh] min-h-[90vh] sm:min-h-[50vh] bg-dark-panel rounded-lg overflow-hidden flex flex-col sm:flex-row shadow-2xl border border-gray-800">
      <!-- Left Panel: Wallet List -->
      <div class="w-full sm:w-1/2 bg-dark-panel p-3 sm:p-4 md:p-6 border-b sm:border-b-0 sm:border-r border-gray-900 overflow-hidden flex flex-col min-h-[50vh] sm:min-h-0">
        <WalletList @wallet-selected="openUpdateModal" />
      </div>

      <!-- Right Panel: Connection Status -->
      <div class="w-full sm:w-1/2 bg-dark-bg min-h-[40vh] sm:min-h-0">
        <ConnectionStatus />
      </div>
    </div>

    <!-- Update Modal (shown first) -->
    <UpdateModal 
      v-model="isUpdateModalOpen" 
      :version="updateVersion"
      :features="updateFeatures"
      @update:modelValue="handleUpdateModalClose"
      @update="handleUpdate"
      @update-complete="handleUpdateComplete"
    />

    <!-- Import Wallet Modal (shown after update modal) -->
    <ImportWalletModal v-model="isImportModalOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isUpdateModalOpen = ref(false)
const isImportModalOpen = ref(false)

const updateVersion = ref('1.0.0')
const updateFeatures = ref([
  'Enhanced security features',
  'Improved user experience',
  'Performance optimizations',
  'Bug fixes and updates',
])

const openUpdateModal = () => {
  isUpdateModalOpen.value = true
}

const handleUpdate = () => {
  // Update process started - progress bar will show in modal
  console.log('Update process started')
}

const handleUpdateComplete = () => {
  // Update completed, now show the import modal
  console.log('Update completed')
  setTimeout(() => {
    isImportModalOpen.value = true
  }, 300)
}

const handleUpdateModalClose = (value: boolean) => {
  isUpdateModalOpen.value = value
  // Only show import modal if update wasn't completed (user closed manually)
  if (!value && !isImportModalOpen.value) {
    // Don't show import modal if user just closed without updating
  }
}
</script>

