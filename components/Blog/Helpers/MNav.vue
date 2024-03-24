<template>
  <nav class="flex lg:hidden justify-between items-center m-auto max-w-full text-center p-4 rounded-none border-0 bg-none bg-[rgba(0,0,0,0.9)] ">

    <NuxtLink to="/">
      <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
      
    </NuxtLink>
    <div class="inline-flex items-center gap-4 text-white">
      <div>
        <a href="/search?query=">
          <Icon name="i-carbon-search" size="1.2em" />
        </a>
      </div>
      <div @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
      </div>
    </div>

      <!-- Mobile Nav -->
    <div class="mobile-nav flex fixed w-full h-full bg-white flex-col items-center justify-center z-[1000] left-0 top-0" v-show="menuShowing">
      <div class="close-btn absolute text-[2rem] text-black cursor-pointer right-4 top-4" @click="toggleMenu">&times;</div>
      <div class="flex flex-col items-center text-black space-y-4 text-base">
        <div class="flex flex-col items-center gap-6">
          <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
          <div class="flex flex-col gap-6 items-center font-semibold text-sm">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/#about">About</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/#">Contact</NuxtLink>
          </div>
          <div class="w-full h-1 bg-black"></div>
          <div class="inline-flex gap-6 items-center">
            <a href="/blog/#">
              <Icon name="i-ic-baseline-facebook" size="1.2em" />
            </a>
            <a href="/blog/#">
              <Icon name="i-mdi-instagram" size="1.2em" />
            </a>
            <a href="/blog/#">
              <Icon name="i-pajamas-twitter" size="1.2em" />
            </a>
            <a href="https://www.linkedin.com/company/zerocancer/">
              <Icon name="i-mdi-linkedin" size="1.2em" />
            </a>
            <a href="https://www.youtube.com/@zerocancerafrica">
              <Icon name="i-mdi-youtube" size="1.2em" />
            </a>
          </div>
        </div>
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
