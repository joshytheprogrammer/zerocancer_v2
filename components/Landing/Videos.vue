<template>
  <div class="block w-full lg:max-w-[80%] lg:grid grid-cols-[2fr_6fr] justify-around items-start mx-auto my-4 lg:my-20 px-4 lg:px-0">
    <LandingHelpersHead>Videos</LandingHelpersHead>
        
    <div class="flex flex-col-reverse lg:flex-col mx-0 lg:my-16">
      <div class="text-xs lg:text-base flex border border-black gap-1 w-fit p-1 rounded-full border-solid">
          <div class=" p-2 lg:px-4 lg:py-3 rounded-full hover:text-white hover:cursor-pointer hover:bg-primary-800" :class="activeTab == 1 ? 'text-white bg-primary-600' : ''" @click="activeTab = 1">Cervical Cancer Awareness</div>
          <div class=" p-2 lg:px-4 lg:py-3 rounded-full hover:text-white hover:cursor-pointer hover:bg-primary-800" :class="activeTab == 2 ? 'text-white bg-primary-600' : ''"  @click="activeTab = 2">Self Sampling</div>
      </div>

      <div class="mx-0 my-6" v-show="activeTab == 1">
          <video data-aos="flip-left" data-aos-duration="1500" class=" w-full rounded-md" poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1707574932/zerocancer/de7044d4d647a45a96baeeb6c542a3b5_ax2s6a.png" loading="lazy" controls>
              <!-- WebM format -->
              <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1707621216/zerocancer/ZeroCancer_Video_ewxn02.webm" type="video/webm">
              
              <!-- MP4 format -->
              <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1707621216/zerocancer/ZeroCancer_Video_ewxn02.mp4" type="video/mp4">
              But I got confused as to the features. Because I felt that we needed to     Your browser does not support the video tag.
          </video>
      </div>

      <div class="mx-0 my-6" v-show="activeTab == 2">
          <video class=" w-full rounded-md" poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1692189641/zerocancer/poster_r48e44.png" loading="lazy" controls>
            <!-- WebM format -->
            <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.webm" type="video/webm">
          
            <!-- MP4 format -->
            <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.mp4" type="video/mp4">
  
            <!-- Fallback content if no supported format is found -->
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  </div> 
</template>

<script setup>
const activeTab = ref(1);
</script>

