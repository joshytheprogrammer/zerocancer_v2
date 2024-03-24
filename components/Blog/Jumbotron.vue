<template>
  <div class="jumbotron h-fit bg-cover bg-center bg-no-repeat ">
    <BlogHelpersNav />
    <BlogHelpersMNav />
    <div v-if="data" class="flex justify-start align-middle items-start flex-col lg:max-w-[80%] mx-auto py-16 px-4 lg:px-0">
      <div class="w-full space-y-6 md:max-w-[80%] lg:max-w-[60%] text-white">
        <div class="inline-flex gap-4 items-center">
          <BlogHelpersTag v-for="category in data.categories" :key="category._id" :name="category.title" />
        </div>
        <h2 class="text-2xl lg:text-4xl leading-snug font-medium lg:font-semibold ">{{ data.title }}</h2>
        <div class="flex items-center gap-4">
          <p>{{ formatDate(data.publishedAt) }}</p>
          <div class="w-12 h-[.1px] bg-white"></div>
          <p class="font-light text-sm lg:text-base">
            {{ data.summary }}
          </p>
        </div>
        <NuxtLink :to="'/blog/'+data.slug.current">
          <button class="bg-transparent border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black">
            Read
          </button>
        </NuxtLink>
        
      </div>
    </div>
  </div>
</template>

<script setup>

const query = groq`*[_type == "post"] | order(publishedAt desc) [0]{
  _id, title, summary, slug, publishedAt, 
  categories[]->{title, _id},
}`

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0') // Get day with leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0') // Get month with leading zero if necessary (Note: January is 0)
  const year = date.getFullYear() // Get full year
  return `${day}.${month}.${year}`
}

const { data, refresh } = useSanityQuery(query);
</script>


<style lang="postcss" scoped>
.jumbotron {
  background-image: url("https://images.unsplash.com/photo-1711025372958-db48a4fe0ba1?q=80&w=2670&auto=format&fit=crop");
}

</style>