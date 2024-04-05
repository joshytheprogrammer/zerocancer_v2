<template>
  <nav class="hidden lg:block bg-[rgba(0,0,0,0.9)] ">
    <div class="max-w-[80%] flex justify-between items-center mx-auto py-4">
      <NuxtLink to="/">
        <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
      </NuxtLink>
      <div class="text-white flex items-center gap-6">
        <div class="inline-flex gap-6 items-center font-semibold text-sm">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>

        </div>
        <div class="w-[.1px] h-6 bg-white"></div>
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
        <div class="w-[.1px] h-6 bg-white"></div>
        <div class="">
          <a href="/search?query=">
            <Icon name="i-carbon-search" size="1.2em" />
          </a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
a.router-link-active {
  @apply underline underline-offset-8 decoration-primary-600 decoration-2;
}
</style>