<template>
  <div>
    <div class="text-white my-4 text-sm flex text-left justify-center items-center lg:text-base" v-if="details.formFilled">
      <div class="bg-primary-900 px-4 py-2 rounded-md w-fit" v-if="details.success">
        <p>You have been added to our Newsletter!</p>
      </div>
      
      <div class="bg-red-900 px-4 py-2 rounded-md w-fit flex gap-4 flex-wrap" v-else>
        <p><b>Message</b>: {{ details.message }}</p>
        <span class="underline cursor-pointer" @click="retry">Try Again</span>
      </div>
    </div>

    <form @submit.prevent="subscribe" v-else class="waitlist-form block text-sm lg:flex text-center justify-center items-center lg:text-base">
      <input class="w-full rounded-md lg:w-[350px] h-16 border border-primary-400 text-primary-400 text-inherit px-4 py-0 lg:rounded-tr-none lg:rounded-br-none border-solid" type="email" placeholder="Enter Your Email Address" v-model="email" :disabled="loading">
      <button class="w-full mx-0 my-4 rounded-md bg-primary-600 text-white h-16 cursor-pointer px-8 py-4 lg:w-fit lg:rounded-tl-none lg:rounded-bl-none border-none" type="submit" :disabled="loading">Join The Waitlist</button>  
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const email = ref('');
const loading = ref(false);

const details = reactive({
  formFilled: false,
  success: false,
  message: ''
})

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
});

async function subscribe() {
  loading.value = true;
  if (!isValidEmail.value) {
    loading.value = false;
    return;
  }

  try {
    const res = await $fetch('/api/newsletter/subscribe', {
      method: "POST",
      body: { 
        email_address: email.value
      }
    });

    const responseData = JSON.parse(res.data);
    if (res.statusCode === 'subscribed') {
      details.success = true;
    } else {
      details.success = false;
      details.message = responseData.message;
    }
  } catch (error) {
    console.error('Error:', error);
    details.success = false;
    details.message = 'An error occurred. Please try again later.';
  } finally {
    loading.value = false;
    details.formFilled = true;
  }
}

function retry() {
  details.formFilled = false;
  email.value = '';
}
</script>

<style lang="postcss" scoped>
.waitlist-form input:focus {
  outline: none;
}
.waitlist-form input::placeholder {
  opacity: 0.6;
}
.waitlist-form button[disabled] {
  background-color: rgba(51, 102, 153, 0.5);
  cursor: not-allowed;
}
</style>
