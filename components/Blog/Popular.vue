<template>
  <div class="w-full lg:max-w-[80%] mx-auto py-16 px-4 lg:px-0"">
    <BlogHelpersTitle title="Popular topics"/>
    <div class="py-20 block md:grid md:grid-cols-2 lg:grid-cols-4 col-span-1 gap-2">
    <!-- <div class="py-20 block lg:flex flex-wrap flex-col lg:flex-row justify-between"> -->
      <BlogHelpersBlogCard v-for="item in data" :key="item._id" :item="item" class="mb-4"  />
      <BlogHelpersBlogCard v-for="item in data" :key="item._id" :item="item" class="mb-4"  />
      <BlogHelpersBlogCard v-for="item in data" :key="item._id" :item="item" class="mb-4"  />
      <BlogHelpersBlogCard v-for="item in data" :key="item._id" :item="item" class="mb-4"  />
    </div>
  </div>
</template>

<script setup>

const query = groq`*[_type == "post"] | order(publishedAt desc){
  _id, title, mainImage, summary, slug, publishedAt, 
  categories[]->{title, _id},
}`

const { data, refresh } = useSanityQuery(query);
</script>

