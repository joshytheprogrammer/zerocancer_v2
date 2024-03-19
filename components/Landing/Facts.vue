<template>
  <section class="block w-full lg:max-w-[80%] lg:grid grid-cols-[2fr_6fr] justify-around items-start mx-auto my-20 px-4 lg:px-0">
    <LandingHelpersHead>Facts</LandingHelpersHead>
    <div class="content block">
      <div class="block ">
        <p class="special-p">
          <span class=" colorise">Cervical cancer</span> is the second most common cancer in females in Africa after breast cancer. It is a cause of chronic disease, morbidity, and death.
        </p>
        <p class="special-p">
          According to the <em>Nigerian Institute of Medical Research (NIMR)</em>, <span class=" colorise">22 women die everyday from cervical cancer</span> while <span class=" colorise">32 new cases are reported each day</span>.
        </p>
        <p class="special-p">
          Just like other cancers, cervical cancer is <span class=" colorise">preventable and treatable if detected early</span>.
        </p>
        <p @click.prevent="toggleReadMore" v-show="showMore == false" class="text-primary-900 underline py-0 p-0">
          <a class="cursor-pointer" >Read more</a>
        </p>  
        <div v-show="showMore" class=" leading-[1.8]">
          <div class="paras">
            <p class="special-p ">
              Cervical cancer is caused by some strains of virus known as <em>Human Papilloma Virus (HPV)</em>.
            </p>
            <p class="special-p ">
              The secret to early detection and prevention is <span class=" colorise">screening for the virus that causes it</span> or using a <em>tissue smear from the cervix (pap smear)</em> or <em>inspection of the cervix with chemicals (VIA)</em> to check women for early signs of the transformation process initiated by the virus.
            </p>
            <p class="special-p ">
              Detecting these viral strains is possible using either <em>DNA or antigen test</em>. More recently, certain <span class=" colorise">proteins produced by the strains of the virus</span> which cause the cancer, also called <span class=" colorise">Oncoproteins</span>, have been shown to give the most sensitive and accurate results of the presence of high risk of cancer.
            </p>
            <p class="special-p ">
              <span class=" colorise">Rapid diagnostic test kits</span> which detect these proteins as well as the antigens are also available for the most accurate testing. These kits are <span class=" colorise">easy to use, very affordable</span>, and give <span class=" colorise">instant results</span>. An example is <span class=" colorise">Mobilab HPV 16/18</span> which detects both antigens and oncoproteins.
            </p>
            <p class="special-p ">
              To perform this test, a <span class=" colorise">sample of fluid from the woman's cervix</span> needs to be obtained. This sample is usually collected by a healthcare professional but recently <span class=" colorise">self collection devices known as Self samplers</span> have been introduced. The <span class=" colorise">Mobilab Delphi Vaginal Self Sampler (DVSS)</span> is one of such.
            </p>
            <p class="special-p ">
              The <span class=" colorise">video below explains how to collect self samples using the DVSS</span>.
            </p>
            <p class="special-p ">
              The collected sample can be taken to the laboratory for testing or tested by self if the woman has the kit.
            </p>
            <p class="special-p ">
              You can find the <span class=" colorise">testing center nearest to you</span> by selecting your location in the designated section of this page for that.
            </p>
            <p class="special-p ">
              You may also <span class=" colorise">fill the request form</span> to express your interest in the screening on any day and time of your choice using the <span class=" colorise">appointment section</span>.
            </p>
            <p class="special-p ">
              You may also <a href="https://api.whatsapp.com/send?text=https://zerocancer.africa" class="text-blue-950 underline">click here</a> to invite your loved ones to screen. By doing so, you are helping to <span class=" colorise">actualize the zero cancer in Africa Initiative</span>.
            </p>
          </div>

          <p @click.prevent="toggleReadMore" v-show="showMore == true" class="text-primary-900 underline py-0 p-0">
            <a class="cursor-pointer" >Read less</a>
          </p>  
        </div>
      </div>
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
.special-p {
  @apply text-justify mb-4;
}
.special-p .colorise {
  @apply text-primary-800;
}

.readLink {
  @apply text-primary-900 underline py-0 p-0
}
</style>