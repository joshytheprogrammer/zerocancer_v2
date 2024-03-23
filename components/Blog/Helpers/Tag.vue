<template>
  <div class="block w-fit bg-[rgba(82,82,82,0.32)] text-white px-2 py-1 text-xs font-bold rounded-lg uppercase">
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['name']);
</script>

<style lang="scss" scoped>

</style>