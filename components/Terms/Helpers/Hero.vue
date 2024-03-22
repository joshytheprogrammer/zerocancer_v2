<template>
  <div class="w-full">
    <div class="h-[200px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:py-8 flex justify-start items-center" :style="'background-image: url('+backgroundImage+')'">
      <div class="w-full mx-auto lg:max-w-[80%] text-white ">
        <h1 class="text-[24px] inline-block leading-[1.4] font-medium lg:text-[64px] lg:leading-[1.6] lg:font-semibold bg-[rgba(0,0,0,0.9)] px-2">{{ term }}</h1>
      </div>
    </div>

   <div class="block w-full lg:max-w-[80%] mx-auto my-4 lg:my-20 px-4 lg:px-0">
    <button type="button" class="text-white focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-900 focus:ring-primary-900">
      <NuxtLink to="/">
        Back Home
      </NuxtLink>
    </button>
   </div>
  </div>
</template>

<script setup>
const props = defineProps(['term']);

// Define an array of background images
const backgroundImages = [
  'https://images.pexels.com/photos/333837/pexels-photo-333837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2339719/pexels-photo-2339719.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6872536/pexels-photo-6872536.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/17615319/pexels-photo-17615319/free-photo-of-a-chain-is-attached-to-a-metal-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

// Randomly select a background image
const randomIndex = Math.floor(Math.random() * backgroundImages.length);

const backgroundImage = backgroundImages[randomIndex];
</script>

<style lang="scss" scoped>

</style>