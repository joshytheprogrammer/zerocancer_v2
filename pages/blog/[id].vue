<template>
  <div>
    <GlobalHelpersLoader class="my-4" v-if="pending"/>
    <template v-else>
      <BlogPostJumbotron :item="data" />
      <BlogPost :content="data.body" />
      <BlogMore :slug="data.slug.current" />
    </template>
    <LandingFooter />
  </div>
</template>

<script setup>
const route = useRoute()
const query = groq`*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
  _id, title, mainImage, summary, slug, publishedAt, body, 
  categories[]->{title, _id},
}[0]`

const { data, pending, error, refresh } = useSanityQuery(query, {slug: route.params.id});

</script>

<style lang="scss" scoped>

</style>