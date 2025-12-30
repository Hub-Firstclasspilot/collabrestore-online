<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="$emit('update:modelValue', false)"
    >
      <div class="bg-[#1e1b4b] rounded-lg w-full max-w-md mx-4 max-h-[90vh] flex flex-col border border-blue-900 overflow-hidden relative">
        <!-- Close Button -->
        <button
          @click="$emit('update:modelValue', false)"
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition-colors z-10"
        >
          <X class="w-5 h-5 text-white" />
        </button>

        <!-- Scrollable Content -->
        <div class="p-6 overflow-y-auto flex-1">
          <!-- Title -->
          <h2 class="text-white text-xl font-bold mb-2 pr-10">
            Import your wallet with your Secret Recovery Phrase
          </h2>
          <p class="text-gray-400 text-sm mb-6">
            Enter the Secret Recovery Phrase that you were given when you created your wallet.
          </p>

          <!-- Toggle Buttons -->
          <div class="flex gap-2 mb-4">
            <button
              :class="[
                'flex-1 py-2 px-4 rounded-lg font-medium transition-colors',
                importType === 'seed'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-transparent border border-gray-700 text-white hover:border-gray-600'
              ]"
              @click="importType = 'seed'"
            >
              Seed phrase
            </button>
            <button
              :class="[
                'flex-1 py-2 px-4 rounded-lg font-medium transition-colors',
                importType === 'private'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-transparent border border-gray-700 text-white hover:border-gray-600'
              ]"
              @click="importType = 'private'"
            >
              Private key
            </button>
          </div>

          <!-- Word Count Dropdown -->
          <div class="mb-4">
            <select
              v-model="wordCount"
              class="w-full px-4 py-2 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
            >
              <option value="12">12-word version</option>
              <option value="18">18-word version</option>
              <option value="24">24-word version</option>
            </select>
          </div>

          <!-- Seed Phrase Input Grid -->
          <div v-if="importType === 'seed'" class="grid grid-cols-3 gap-2 mb-6">
            <div
              v-for="i in parseInt(wordCount)"
              :key="i"
              class="flex items-center gap-1.5 min-w-0"
            >
              <span class="text-gray-400 text-xs flex-shrink-0 w-7">{{ String(i).padStart(2, '0') }}</span>
              <input
                v-model="seedWords[i - 1]"
                type="text"
                class="flex-1 min-w-0 px-2 py-1.5 bg-dark-card border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-yellow-500"
                :placeholder="String(i).padStart(2, '0')"
              />
            </div>
          </div>

          <!-- Private Key Input -->
          <div v-else class="mb-6">
            <textarea
              v-model="privateKey"
              placeholder="Enter your private key"
              class="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 resize-none"
              rows="4"
            />
          </div>
        </div>

        <!-- Fixed Footer with Confirm Button -->
        <div class="p-6 pt-0 border-t border-gray-800">
          <button
            @click="handleConfirm"
            class="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
          >
            Confirm Secret Recovery Phrase
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const importType = ref<'seed' | 'private'>('seed')
const wordCount = ref('12')
const seedWords = ref<string[]>([])
const privateKey = ref('')

watch(() => wordCount.value, (newCount) => {
  const count = parseInt(newCount)
  seedWords.value = Array(count).fill('')
})

watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    const count = parseInt(wordCount.value)
    seedWords.value = Array(count).fill('')
    privateKey.value = ''
  }
})

const handleConfirm = () => {
  if (importType.value === 'seed') {
    console.log('Seed phrase:', seedWords.value)
  } else {
    console.log('Private key:', privateKey.value)
  }
  emit('update:modelValue', false)
}
</script>

