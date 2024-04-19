<template>
  <section class="block w-full lg:max-w-[80%] lg:grid grid-cols-[2fr_6fr] justify-around items-start mx-auto my-20 px-4 lg:px-0">
    <LandingHelpersHead id="sampler">Sampler</LandingHelpersHead>
    <div class="content my-4 flex flex-col mx-0 lg:my-16">
      <video class="w-full h-auto rounded-xl" poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1692189641/zerocancer/poster_r48e44.png" loading="lazy" controls>
        <!-- WebM format -->
        <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.webm" type="video/webm">
      
        <!-- MP4 format -->
        <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.mp4" type="video/mp4">

        <!-- Fallback content if no supported format is found -->
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

</style>