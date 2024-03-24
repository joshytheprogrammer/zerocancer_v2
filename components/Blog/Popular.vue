<template>
  <div class="py-20 max-w-[80%] mx-auto">
    <BlogHelpersTitle title="Popular topics"/>
    <div class="py-20">
      <BlogHelpersBlogCard v-for="item in data" :key="item._id" :item="item"  />
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

