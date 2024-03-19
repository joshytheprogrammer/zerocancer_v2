<template>
  <div v-show="showingModal" tabindex="-1" aria-hidden="true" class="flex  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-[rgba(0,0,0,0.5)]">
    <div class="relative p-4 w-full max-w-2xl max-h-full m-auto">
        <!-- Modal content -->
      <div class="relative overflow-y-auto rounded-lg shadow bg-white">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
          <h3 class="text-xl font-semibold  text-black">
            <slot name="header"></slot>
          </h3>
          <button type="button" class="text-black bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-primary-300 hover:text-black" @click="toggleModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <slot name="body"></slot>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t rounded-b border-gray-200">
          <button @click="toggleModal" type="button" class="text-white   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['showingModal'])
const emit = defineEmits(['closeModal'])

function toggleModal() {
  emit('closeModal')
}
</script>
