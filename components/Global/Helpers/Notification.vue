<template>
  <div :class="[bgClasses, 'text-white px-4 py-2 rounded-md shadow-md flex items-center justify-between border-b border-gray-200']">
    <p>{{ props.message }}</p>
    <button type="button" class="text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-primary-300 hover:text-black" @click="close">
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['message', 'type']);
const emit = defineEmits(['closeNoty'])

function close() {
  emit('closeNoty')
}

const bgClasses = computed(() => {
  return {
    'bg-green-600': props.type === 'success',
    'bg-primary-600': props.type === 'info',
    'bg-yellow-600': props.type === 'warning',
    'bg-red-600': props.type === 'error',
  };
});
</script>
