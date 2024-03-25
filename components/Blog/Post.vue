<template>
  <div class="post w-full lg:max-w-[80%] mx-auto py-16 px-4 lg:px-0">
    <SanityContent :blocks="content" />
  </div>
</template>

<script setup>
const props = defineProps(['content']);
</script>

<style lang="postcss">
.post h1 {
  @apply font-bold text-4xl my-4 text-primary-950;
}

.post h2 {
  @apply font-bold text-3xl my-4 text-primary-950;
}

.post h3 {
  @apply font-bold text-2xl my-4 text-primary-950;
}

.post h4 {
  @apply font-bold text-xl my-4 text-primary-950;
}

.post h5 {
  @apply font-bold text-lg my-4 text-primary-950;
}

.post h6 {
  @apply font-bold text-[17px] my-4 text-primary-950;
}

.post p {
  @apply text-base leading-6 my-4;
}

.post a {
  @apply text-primary-600 underline font-medium;
}

/* Lists */

.post ol {
  @apply list-decimal pl-6 my-4;
}

.post li {
  @apply mb-2;
}

.post ul {
  @apply list-disc pl-6 my-4;
}

/* Blockquotes */

.post blockquote {
  @apply m-4 p-2 border-l-4 border-gray-300 italic;
}

.post strong {
  @apply text-primary-950;
}

/* Code */

.post pre {
  @apply bg-gray-100 p-4 font-mono text-sm;
}

/* Table */
.post table {
  @apply w-full border-collapse border border-gray-300;
}

.post th,
.post td {
  @apply border border-gray-300 px-4 py-2;
}

.post thead th {
  @apply bg-gray-100 font-bold text-base;
}

</style>