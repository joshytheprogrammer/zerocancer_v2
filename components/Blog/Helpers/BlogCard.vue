<template>
  <div class="flex flex-col items-start gap-6 w-fit max-w-[380px]" >
    <SanityImage
      :asset-id="item.mainImage.asset._ref"
      class="rounded-lg"
      auto="format"
      bg="182739"
    />
    
    <div class="space-y-4">
      <p class="text-slate-600 text-sm">{{ formatDate(item.publishedAt) }}</p>
      <h4 class="font-bold text-lg">
        <NuxtLink :to="'/blog/'+item.slug.current">
          {{ item.title.length > 60 ? item.title.substring(0, 55) + "..." : item.title }}
        </NuxtLink>
      </h4>
      <p class="text-sm">
        {{ item.summary.length > 140 ? item.summary.substring(0, 140) + "..." : item.summary }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item']);

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0') // Get day with leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0') // Get month with leading zero if necessary (Note: January is 0)
  const year = date.getFullYear() // Get full year
  return `${day}.${month}.${year}`
}
</script>

<style lang="scss" scoped>

</style>