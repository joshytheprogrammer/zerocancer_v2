<template>
  <nav class="flex lg:hidden justify-between items-center m-auto max-w-full text-center p-0 rounded-none border-0 bg-none">
    <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
    <div class="toggleMenu" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
    </div>
      <!-- Mobile Nav -->
    <div class="mobile-nav flex fixed w-full h-full bg-white flex-col items-center justify-center z-[1000] left-0 top-0" v-show="menuShowing">
      <div class="close-btn absolute text-[2rem] text-black cursor-pointer right-4 top-4" @click="toggleMenu">&times;</div>
      <div class="mobile-links flex flex-col items-center">
        <a href="#about">About</a>
        <a href="#explorer">Explorer</a>
        <a href="#dvss">DVSS</a>
        <a href="#blog">Blog</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const menuShowing = ref(false);

  function toggleMenu() {
    menuShowing.value = !menuShowing.value
  }
</script>

<style lang="postcss" scoped>
nav .mobile-links a {
  @apply text-black p-4;
}
</style>