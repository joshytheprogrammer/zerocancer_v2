<template>
  <div class="h-fit bg-cover bg-center bg-no-repeat " :style="'background-image: url('+ $urlFor(item.mainImage).size(1280, 1080).url() +');'">
    <BlogHelpersNav />
    <BlogHelpersMNav />

    <div class="flex justify-center align-middle items-center text-center flex-col lg:max-w-[80%] mx-auto py-16 px-4 lg:px-0 bg-[rgba(0,0,0,0.7)]">
      <div class="w-full space-y-6 md:max-w-[80%] lg:max-w-[60%] text-white">
        <div class="inline-flex gap-4 items-center">
          <BlogHelpersTag v-for="category in item.categories" :key="category._id" :name="category.title" />
        </div>
        <h2 class="text-2xl lg:text-4xl leading-snug font-medium lg:font-semibold ">{{ item.title }}</h2> 
        <p class="font-light text-sm lg:text-base">
          {{ item.summary }}
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps(['item']);
</script>

<style lang="scss" scoped>

</style>