<template>
  <div>
    <BlogPostJumbotron :item="data" />
    <BlogPost :content="data.body" />
    <LandingFooter />
  </div>
</template>

<script setup>
const route = useRoute()
const query = groq`*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
  _id, title, mainImage, summary, slug, publishedAt, body, 
  categories[]->{title, _id},
}[0]`

const { data, refresh } = useSanityQuery(query, {slug: route.params.id});

console.log(data.value)
</script>

<style lang="scss" scoped>

</style>