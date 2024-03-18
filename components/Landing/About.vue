<template>
  <section class="block w-full lg:max-w-[80%] lg:grid grid-cols-[2fr_6fr] justify-around items-start mx-auto my-20 px-4 lg:px-0">
    <LandingHelpersHead>About</LandingHelpersHead>
    <div class="content flex flex-col">
      <div class="block lg:flex items-end justify-start flex-wrap">
        <p class="w-full px-0 py-4 text-base leading-[1.8]">
          Zerocancer is a comprehensive cancer prevention initiative dedicated to minimizing the occurrence of new cases of cervical, breast, prostate, and colon cancers. Our multifaceted approach involves extensive awareness campaigns, public enlightenment, immunization, and screening initiatives. We firmly believe that early detection is key to effective treatment and, as such, we prioritize identifying individuals at high risk through thorough high performance screening processes.
        </p>
        <p @click.prevent="toggleReadMore" v-show="showMore == false" class="text-primary-900 underline py-0 p-0">
          <a class="cursor-pointer" >Read more</a>
        </p>  
        <div v-show="showMore" class="items-end justify-start leading-[1.8]">
          <div class="paras">
            <p>Our mission extends beyond awareness, as we actively support diagnosed cases in gaining access to the most affordable and appropriate care available. We strive to connect them with healthcare professionals in close proximity and facilitate collaborations with philanthropists and non-profit organizations engaged in cancer treatment. Recognizing that the majority of cancers are preventable or treatable if detected early, our overarching goal is to screen populations at risk, keeping them informed and facilitating opportunities for free or subsidized screening and immunizations.</p>

            <p>
              For those with the means to afford these services, immediate screening is encouraged. Leveraging the best available and affordable screening methods, individuals identified as high risk are closely monitored for prevention and early intervention. In cases where cancer is diagnosed, we ensure prompt referrals to the appropriate healthcare professionals for effective disease management.
            </p>

            <p>
              Zerocancer is committed to monitoring all high-risk cases, whether through individual, sponsored, or government programs. This approach ensures a continuous follow-up process conducted by assigned healthcare professionals, contributing to the best possible outcomes for those in need. Additionally, we play a pivotal role in helping non-profit organizations, governments, and donors identify and connect with specific population groups, communities, and associations for targeted interventions and outreach programs.
            </p>

            <p>
              In our collaborative efforts, we also engage with manufacturers, representatives, and vendors of cancer screening kits, devices, and equipment. Through these partnerships, we secure discounted products and services, fostering a mutually beneficial relationship where they gain publicity among our network while contributing to our mission of preventing and managing cancer effectively. Zerocancer is not just an initiative; it's a dynamic force that brings together various stakeholders to create a united front against cancer.
            </p>
          </div>

          <p @click.prevent="toggleReadMore" v-show="showMore == true" class="text-primary-900 underline py-0 p-0">
            <a class="cursor-pointer" >Read less</a>
          </p>  
        </div>
      </div>
      <img class=" w-full mx-0 my-16" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574959/zerocancer/about_td6eg9.png" alt="">
    </div>
  </section>
</template>

<script setup>
const showMore = ref(false);

function toggleReadMore() {
  showMore.value = !showMore.value
}
</script>

<style lang="postcss" scoped>
.paras p {
  @apply leading-[1.8] mb-3;
}

</style>