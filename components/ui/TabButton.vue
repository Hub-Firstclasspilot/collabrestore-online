<template>
  <button
    :class="[
      'px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium transition-colors text-xs sm:text-sm',
      isActive
        ? 'bg-dark-card text-white'
        : 'bg-transparent text-gray-400 hover:text-gray-300'
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

