<template>
  <footer class="bg-primary-950 text-white mt-20 py-20">
    <div class=" w-full lg:max-w-[80%] mx-auto px-4 lg:px-0 text-white">
        <NuxtLink to="/">
            <img class="w-20" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
        </NuxtLink>
        <div class=" flex flex-col lg:flex-row justify-between items-start">
            <div class="">
                <p class="text-xs lg:text-base my-8">By using our website, you accept our privacy policy. Reach out to us to discover how we can help you  with issues relating to cancer.</p>
                <p><a href="mailto:admin@zerocancer.africa" class="text-white text-xl lg:text-3xl ">admin@zerocancer.africa</a></p>
            </div>
            <div class="w-full flex justify-between lg:justify-end lg:gap-16 my-8 lg:my-0">
                <div class="">
                    <h2 class="text-2xl lg:text-3xl font-normal lg:font-bold pb-6">Company</h2>
                    <div class="flex flex-col space-y-6">
                        <a href="/#about" class="text-white">About</a>
                        <a href="/#explorer" class="text-white">Explorer</a>
                        <a href="/#facts" class="text-white">Some Facts</a>
                        <NuxtLink to="/blog" class="text-white">Blog</NuxtLink>
                    </div>
                </div>
                <div class="">
                    <h2 class="text-2xl lg:text-3xl font-normal lg:font-bold pb-6">Connect</h2>
                    <div class="flex flex-col space-y-6">
                        <a href="#" class="text-white">Facebook</a>
                        <a href="#" class="text-white">Twitter</a>
                        <a href="https://www.linkedin.com/company/zerocancer/" class="text-white">Linkedin</a>
                        <a href="https://youtube.com/@zerocancerafrica" class="text-white">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-8">
        <div class="flex flex-col-reverse lg:flex-row justify-between text-xs lg:text-base">
            <p class="py-4 lg:py-0">&copy; <span class=" lg:font-bold lg:text-lg">{{ new Date().getFullYear() }}</span> ZeroCancer. All rights reserved.</p>
            <div class="flex justify-between flex-col lg:flex-row text-left space-y-4 lg:space-y-0 lg:py-0 lg:gap-8 text-base lg:text-xl lg:font-semibold">
                <NuxtLink to="/#">Legal Notice</NuxtLink>
                <NuxtLink to="/terms/cookies-policy">Cookies Policy</NuxtLink>
                <NuxtLink to="/terms/privacy-policy">Privacy Policy</NuxtLink>
            </div>
        </div>
    </div>
</footer>

</template>

<script setup>

</script>

<style lang="postcss" scoped>

</style>