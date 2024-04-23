<template>
  <div class="w-full flex flex-col-reverse lg:grid grid-cols-[1fr_1fr] items-center justify-items-end bg-[rgba(145,145,145,0.1)] mx-0 my-16 rounded-xl">
    <div class="p-4 lg:p-8">
      <span class="block w-fit border border-primary-800 bg-primary-800 text-white text-[8px] lg:text-xs uppercase mb-8 px-4 py-2 rounded-full border-solid">featured</span>
      <h2 class="text-xl lg:text-3xl cursor-pointer">
        <NuxtLink :to="'/blog/'+data.slug.current">
        {{ data.title }}
        </NuxtLink>
      </h2>
      <p class="text-xs lg:text-base leading-5 md:leading-8 px-0 py-4"> {{ data.summary }}</p>
      <NuxtLink class="block" :to="'/blog/'+data.slug.current">
        <button class=" bg-primary-600 cursor-pointer text-white text-base font-medium px-12 py-4 rounded-md border-none">
          Read
        </button>
      </NuxtLink>
    </div>
    <SanityImage
      :asset-id="data.mainImage.asset._ref"
      class="w-full max-h-[480px] lg:h-full object-cover rounded-tr-md rounded-br-md"
      auto="format"
      bg="182739"
    />
  </div>
</template>

<script setup>
const query = groq`*[_type == "post"] | order(publishedAt desc) [0]{
  _id, title, summary, slug, publishedAt, mainImage,
  categories[]->{title, _id},
}`

const { data, refresh } = await useSanityQuery(query);

</script>

<style lang="scss" scoped>

</style>