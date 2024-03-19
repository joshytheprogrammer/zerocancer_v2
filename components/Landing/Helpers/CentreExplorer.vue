<template>
  <div class="explorer block w-full shadow-md lg:flex justify-around items-center gap-8 mx-0 my-8 px-4 lg:px-16 py-8 rounded-2xl border-none">
    <div class="">
      <GlobalHelpersLoader />
    </div>
    <select id="state" name="state">
      <option value="" disabled selected>Select a State</option>
    </select>

    <select id="region" name="region">
      <option value="" disabled selected>Please select a state first</option>
    </select>
    <button class="w-full lg:w-fit bg-primary-600 text-white text-center h-16 cursor-pointer px-8 py-4 rounded-md border-none" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8"/></svg>
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.explorer select {
  @apply w-full my-4 lg:my-0 lg:w-[33.3%] h-16 border border-primary-600 text-black bg-white text-inherit px-4 py-0 rounded-md border-solid;
}

.explorer select:focus {
  outline: none;
}

.explorer select::placeholder {
  @apply text-black opacity-60;
}

.explorer button[disabled] {
  background-color: rgba(51, 102, 153, 0.5);
  cursor: not-allowed;
}

.explorer button span {
  @apply hidden;
}

.explorer button svg {
  @apply block m-auto text-center;
}

</style>