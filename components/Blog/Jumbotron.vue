<template>
  <div class="jumbotron h-fit bg-cover bg-center bg-no-repeat ">
    <BlogHelpersNav />
    <BlogHelpersMNav />
    <div class="flex justify-start align-middle items-start flex-col max-w-[80%] mx-auto py-16">
        <div class="w-full space-y-6 md:max-w-[80%] lg:max-w-[60%] text-white">
          <BlogHelpersTag name="Adventure" />
          <h2 class="text-2xl lg:text-4xl leading-snug font-medium lg:font-semibold "> Empowering Lives: A Guide to <br class="hidden lg:block"> Early Cancer Detection </h2>
          <div class="flex items-center gap-4">
            <p>08.08.2021 </p>
            <div class="w-12 h-[.1px] bg-white"></div>
            <p class="font-light text-sm lg:text-base">In this post, explore the vital role of early cancer detection with a guide on screening methods, risk factors, and proactive measures. </p>
          </div>
          <button class="bg-transparent border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black">Read</button>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.jumbotron {
  background-image: url("https://images.unsplash.com/photo-1711025372958-db48a4fe0ba1?q=80&w=2670&auto=format&fit=crop");
}

</style>