<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="!isUpdating && $emit('update:modelValue', false)"
    >
      <div class="bg-gradient-to-b from-purple-900 to-black rounded-lg w-full max-w-md mx-2 sm:mx-4 p-4 sm:p-6 relative">
        <!-- Close Button -->
        <button
          v-if="!isUpdating"
          @click="$emit('update:modelValue', false)"
          class="absolute top-2 sm:top-4 right-2 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent hover:bg-gray-800 flex items-center justify-center transition-colors"
        >
          <X class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <!-- Download Icon -->
        <div class="flex justify-center mb-3 sm:mb-4">
          <Download class="w-12 h-12 sm:w-16 sm:h-16 text-white" stroke-width="1.5" />
        </div>

        <!-- Title -->
        <h2 class="text-white text-lg sm:text-2xl font-bold text-center mb-2">
          {{ isUpdating ? 'Updating...' : 'Update Available' }}
        </h2>
        <p class="text-white text-sm sm:text-base text-center mb-4 sm:mb-6">
          {{ isUpdating ? `Installing version ${props.version}...` : `Version ${props.version}` }}
        </p>

        <!-- Progress Bar (shown during update) -->
        <div v-if="isUpdating" class="mb-6">
          <div class="w-full bg-dark-card rounded-full h-3 mb-2 overflow-hidden">
            <div
              class="bg-dark-purple h-full rounded-full transition-all duration-300 ease-out"
              :style="{ width: `${Math.round(progress)}%` }"
            ></div>
          </div>
          <p class="text-white text-sm text-center">{{ Math.round(progress) }}%</p>
        </div>

        <!-- Features List (hidden during update) -->
        <div v-if="!isUpdating" class="bg-dark-card rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <ul class="space-y-1.5 sm:space-y-2 text-white text-xs sm:text-sm">
            <li v-for="feature in (props.features || defaultFeatures)" :key="feature" class="flex items-start gap-2">
              <span class="text-dark-purple mt-0.5">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Update Button (hidden during update) -->
        <button
          v-if="!isUpdating"
          @click="handleUpdate"
          class="w-full py-3 bg-dark-purple hover:bg-dark-purpleDark text-white font-medium rounded-lg transition-colors mb-4"
        >
          Update
        </button>

        <!-- Support Link (hidden during update) -->
        <div v-if="!isUpdating" class="text-center">
          <span class="text-gray-400 text-sm">Need help? </span>
          <a href="#" class="text-dark-purple hover:underline text-sm">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { Download, X } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  modelValue: boolean
  version?: string
  features?: string[]
}>(), {
  version: '1.0.0',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update': []
  'update-complete': []
}>()

const defaultFeatures = [
  'Enhanced security features',
  'Improved user experience',
  'Performance optimizations',
  'Bug fixes and updates',
]

const isUpdating = ref(false)
const progress = ref(0)
let progressInterval: ReturnType<typeof setInterval> | null = null

const handleUpdate = () => {
  isUpdating.value = true
  progress.value = 0

  // Simulate progress updates
  progressInterval = setInterval(() => {
    if (progress.value < 100) {
      // Increment progress with some randomness for realism
      const increment = Math.random() * 15 + 5 // 5-20% increments
      progress.value = Math.min(100, progress.value + increment)
    } else {
      // Progress complete
      if (progressInterval) {
        clearInterval(progressInterval)
        progressInterval = null
      }
      
      // Wait a moment before completing
      setTimeout(() => {
        isUpdating.value = false
        progress.value = 0
        emit('update-complete')
        emit('update:modelValue', false)
      }, 500)
    }
  }, 200) // Update every 200ms
}

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>

