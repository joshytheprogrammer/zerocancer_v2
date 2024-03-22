<template>
  <div class="terms">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="postcss">
.terms h1 {
  @apply font-bold text-2xl my-4;
}

.terms h2 {
  @apply font-bold text-xl my-4;
}

.terms h3 {
  @apply font-bold text-lg my-4;
}

.terms p {
  @apply text-base leading-6 my-4;
}

.terms a {
  @apply text-primary-600 underline font-medium;
}

/* Lists */

.terms ol {
  @apply list-decimal pl-6 my-4;
}

.terms li {
  @apply mb-2;
}

.terms ul {
  @apply list-disc pl-6 my-4;
}

/* Blockquotes */

.terms blockquote {
  @apply m-4 p-2 border-l-4 border-gray-300 italic;
}

/* Code */

.terms pre {
  @apply bg-gray-100 p-4 font-mono text-sm;
}

/* Table */
.terms table {
  @apply w-full border-collapse border border-gray-300;
}

.terms th,
.terms td {
  @apply border border-gray-300 px-4 py-2;
}

.terms thead th {
  @apply bg-gray-100 font-bold text-base;
}

</style>
