<template>
  <nav class="hidden lg:flex justify-between items-center border-white bg-primary-200 m-auto px-8 py-4 rounded-full border-2 border-solid max-w-[80%] ">
    <NuxtLink to="/">
      <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
    </NuxtLink>
    <div class="links text-black">
      <a href="#about">About</a>
      <a href="#explorer">Explorer</a>
      <a href="#facts">Facts</a>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
    <div class="contact">
      <a class="text-black px-8 py-4 rounded-full bg-secondary-300" href="mailto:admin@zerocancer.africa">Contact Us</a>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
nav .links a {
  @apply text-inherit px-4 py-0;
}
</style>