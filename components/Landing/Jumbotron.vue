<template>
  <div class="jumbotron">
    <nav data-aos="fade-down">
      <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574928/zerocancer/zero_cancer-FULL-LOGO_cnamof.svg" alt="Zero Cancer full Logo">
      <div class="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
      </div>
      <div class="links">
          <a href="#about">About</a>
          <a href="#explorer">Explorer</a>
          <a href="#dvss">DVSS</a>
          <a href="#blog">Blog</a>
      </div>
      <div class="contact">
          <a href="mailto:admin@zerocancer.africa">Contact Us</a>
      </div>
        <!-- Mobile Nav -->
      <div class="mobile-nav">
        <div class="close-btn">&times;</div>
        <div class="mobile-links">
          <a href="#about">About</a>
          <a href="#explorer">Explorer</a>
          <a href="#dvss">DVSS</a>
          <a href="#blog">Blog</a>
        </div>
      </div>
    </nav>
        

    <div class="hero">
      <h1>Embark on Your Path to <br> Wellness with Zer<span><img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1708034791/zerocancer/Group_13_cv2voj.svg" alt="zerocanceer">o</span>Cancer</h1>
      <p>At Zerocancer, we advocate for collaborative efforts among all stakeholders, emphasizing the integration of information and biotechnology in the comprehensive fight against cancers. Our commitment extends across all facets of prevention and management, working diligently until the incidence and impact of this menace are minimized to zero in Africa.</p>
      <div class="waitlist-form">
        <input type="email" disabled placeholder="Enter Your Email Address (coming soon)">
        <button type="button" disabled>Join The Waitlist</button>  
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.jumbotron {
  @apply bg-cover bg-center bg-no-repeat h-[800px] px-20 py-8;
  background-image: url("https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574957/zerocancer/hero_section_BG_e6z2ak.png");
}
nav {
  @apply max-w-[80%] flex justify-between items-center border-white bg-primary-200 m-auto px-8 py-4 rounded-[4rem] border-2 border-solid;
}
nav img {
  @apply w-20;
}
nav .toggleMenu {
  @apply hidden;
}
nav .links {
  @apply text-black;
}
nav .links a {
  @apply text-inherit px-4 py-0;
}
nav .contact a {
  @apply text-black px-8 py-4 rounded-[4rem] bg-secondary-300;
}

/* Mobile Nav Styles */
nav .mobile-nav {
  @apply hidden fixed w-full h-full bg-[color:var(--light)] flex-col items-center justify-center z-[1000] left-0 top-0;
}
nav .mobile-links {
  @apply flex flex-col items-center;
}
nav .mobile-links a {
  @apply text-black p-4;
}
nav .close-btn {
  @apply absolute text-[2rem] text-black cursor-pointer right-4 top-4;
}

/* Hero Section Styles */
.hero {
  @apply w-full text-center text-primary-800 mx-0 my-20;
}
.hero h1 {
  @apply text-[64px] leading-[1.6] font-black relative inline-block;
}

.hero h1 img {
  @apply absolute z-[1] left-[564px] top-[135px];
}
.hero p {
  @apply text-lg font-medium max-w-[800px] m-auto px-0 py-4;
}
.hero .waitlist-form {
  @apply flex text-center justify-center items-center text-base mt-8;
}
.hero .waitlist-form input {
  @apply w-[350px] h-[60px] border border-primary-400 text-primary-400 text-[inherit] px-4 py-0 rounded-tr-none rounded-br-none rounded-md border-solid;
}
.hero .waitlist-form input:focus {
  outline: none;
}
.hero .waitlist-form input::placeholder {
  @apply text-primary-400 opacity-60;
}
.hero .waitlist-form button {
  @apply text-inherit bg-primary-600 text-white h-[60px] cursor-pointer px-8 py-4 rounded-tl-none rounded-bl-none rounded-md border-[none];
}

.hero .waitlist-form button[disabled] {
  background-color: rgba(51, 102, 153, 0.5);
  cursor: not-allowed;
}
</style>