<template>
  <div class="jumbotron h-fit p-4 bg-cover bg-center bg-no-repeat lg:h-[800px] lg:px-20 lg:py-8">

  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.jumbotron {
  background-image: url("https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574957/zerocancer/hero_section_BG_e6z2ak.png");
}

.hero .waitlist-form input:focus {
  outline: none;
}
.hero .waitlist-form input::placeholder {
  @apply text-primary-400 opacity-60;
}

.hero .waitlist-form button[disabled] {
  background-color: rgba(51, 102, 153, 0.5);
  cursor: not-allowed;
}
</style>