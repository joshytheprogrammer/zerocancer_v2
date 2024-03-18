<template>
  <div class="jumbotron h-[600px] p-4 bg-cover bg-center bg-no-repeat lg:h-[800px] px-20 lg:py-8">
    <LandingHelpersMNav />
    <LandingHelpersNav />

    <div class="hero mx-0 my-8 w-full text-center text-primary-800 lg:my-20">
      <h1 class="text-[28px] relative inline-block leading-[1.4] font-bold lg:text-[64px] lg:leading-[1.6] lg:font-black">Embark on Your Path to
        <br>
         Wellness with Zer<span><img class="absolute z-10 max-h-5 left-[239px] top-[51px] lg:max-h-full lg:left-[564px] lg:top-[135px]" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1708034791/zerocancer/Group_13_cv2voj.svg" alt="zerocanceer">o</span>Cancer
      </h1>
      <p class="max-w-[800px] m-auto px-0 py-4 text-base font-normal lg:text-lg lg:font-medium">At Zerocancer, we advocate for collaborative efforts among all stakeholders, emphasizing the integration of information and biotechnology in the comprehensive fight against cancers. Our commitment extends across all facets of prevention and management, working diligently until the incidence and impact of this menace are minimized to zero in Africa.</p>
      <div class="waitlist-form block text-sm lg:flex text-center justify-center items-center lg:text-base mt-8">
        <input class="w-full rounded-md lg:w-[350px] h-16 border border-primary-400 text-primary-400 text-inherit px-4 py-0 lg:rounded-tr-none lg:rounded-br-none border-solid" type="email" disabled placeholder="Enter Your Email Address (coming soon)">
        <button class=" w-full mx-0 my-4 rounded-md bg-primary-600 text-white h-16 cursor-pointer px-8 py-4 lg:w-fit lg:rounded-tl-none lg:rounded-bl-none border-none" type="button" disabled>Join The Waitlist</button>  
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile';
  
const device = useMobileStore();

const isMobile = computed(() => device.getDevice);

// Function to update the isMobile value
function updateIsMobile() {
  device.checkWidth()
}

// Call the updateIsMobile function initially
updateIsMobile()

// Add event listeners on component mount and remove them on component unmount
onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});
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