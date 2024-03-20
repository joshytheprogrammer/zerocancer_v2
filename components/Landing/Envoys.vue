<template>
  <section class="envoys w-full px-4 lg:px-0 lg:max-w-[80%] mx-auto my-20">
    <div class="content flex flex-col gap-4">
      <h2 class=" text-2xl font-normal">Zerocancer Envoys</h2>
      <p class=" px-0 py-3">We have a list of professional healthcare workers who are passionate about our cause, ranging from different specialties. Are you a healthcare worker? Why don't you join us and fight the battle for zero cancer. <a class=" text-primary-600 underline" href="https://forms.gle/yri85hThoptuHqf27">Click here to join</a></p>
      <div class="btns">
        <button class=" w-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] border border-primary-600 text-left cursor-pointer lg:w-96 h-16 flex justify-between items-center px-4 py-0 rounded-md border-solid bg-white" @click="listEnvoys" v-show="!envoysVisible">
          <span>List Envoys</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
          </span>
        </button>
        <button class=" w-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] border border-primary-600 text-left cursor-pointer lg:w-96 h-16 flex justify-between items-center px-4 py-0 rounded-md border-solid bg-white" @click="hideEnvoys" v-show="envoysVisible">
          <span>Hide Envoys</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="m7 15l5-5l5 5z"/></svg>
          </span>
        </button>
      </div>
    </div>
    <div class="" v-show="loading">
      <GlobalHelpersLoader />
    </div>
    <div class="block lg:table  overflow-x-auto border relative lg:overflow-x-hidden mx-0 my-8 rounded-xl border-solid border-gray-300" v-show="envoysVisible">
      <div class="tbl-header bg-primary-100 rounded-t-xl w-[760px] lg:w-full">
        <table class=" w-full table-fixed">
          <thead class="">
            <tr>
              <th class=" text-left font-medium text-black px-4 py-5">Name</th>
              <th class=" text-left font-medium text-black px-4 py-5">Place of Work</th>
              <th class=" text-left font-medium text-black px-4 py-5">Date added</th>
              <th class=" text-left font-medium text-black px-4 py-5">Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content h-80 mt-0 w-[760px] lg:w-full">
        <table class=" w-full table-fixed">
          <tbody>
            <tr v-for="envoy in envoys" :key="envoy.id">
              <td>
                <div class="name flex items-center gap-2">
                  <img class=" object-cover w-14 h-14 rounded-full" :src="envoy.profileImage" alt="profile">
                  <span>{{ envoy.fullName }}</span>
                </div>
              </td>
              <td>{{ envoy.placeOfWork }}</td>
              <td>{{ formatDate(envoy.dateAdded) }}</td>
              <td>
                <span class="l envoySpanViewLink cursor-pointer underline px-1 py-0" @click="showEnvoyProfile(envoy.id)">View</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="slide-menu w-full fixed z-[99]  lg:absolute lg:w-[400px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-transform duration-[0.3s] ease-in overflow-y-auto right-0 top-0" v-show="slideMenuActive">
        <div class="content">
          <div class="header flex justify-between items-center bg-white px-[15px] py-4 border-b-[#ddd] border-b border-solid">
            <h2 class=" text-xl font-medium">Profile</h2>
            <span class="close-button block text-xl cursor-pointer" @click="closeSlideMenu">&times;</span>
          </div>
          <div class="body p-4">
            <img class=" w-[300px] max-h-[400px] rounded-xl" :src="selectedEnvoy.profileImage" :alt="'profile for ' + selectedEnvoy.fullName + ' in zero cancer envoy list.'">
            <div class="values flex flex-col gap-4 px-0 py-4">
              <div class="fi_">
                <h2 class="text-lg font-medium">{{ selectedEnvoy.fullName }}</h2>
                <p class="text-sm font-light">{{ selectedEnvoy.title }}</p>
              </div>
              <div class="se_">
                <h2 class="text-lg font-medium">Place of Work</h2>
                <p class="text-sm font-light">{{ selectedEnvoy.placeOfWork }}</p>
              </div>
              <div class="th_">
                <h2 class="text-lg font-medium">Vision Video</h2>
                <p class="text-sm font-light">
                  <a class="text-primary-600 cursor-pointer underline" :href="selectedEnvoy.visionLink">
                  {{ selectedEnvoy.fullName?.toLowerCase().replace(/ /g, "_") }}_vision_statement
                  </a>
                </p>
              </div>
              <div class="fif_">
                <h2 class="text-lg font-medium">Vision Statement</h2>
                <p class="text-sm font-light text-xs">{{ selectedEnvoy.visionStatement }}</p>
              </div>
              <div class="fo_">
                <h2 class="text-lg font-medium">Specialty</h2>
                <div class="text-sm font-light flex justify-start flex-wrap gap-3 mx-0 my-[0.4rem]">
                  <div v-for="specialty in selectedEnvoy.specialties" :text-lg font-medium="specialty.id" class=" border border-black w-fit font-light text-sm px-[0.8rem] py-[0.2rem] rounded-full border-solid">{{ specialty.label }}</div>
                </div>
              </div>
              <div class="six_">
                <h2 class="text-lg font-medium">Memberships</h2>
                <div class="text-sm font-light flex justify-start flex-wrap gap-3 mx-0 my-[0.4rem]">
                  <div v-for="membership in selectedEnvoy.memberships" :text-lg font-medium="membership.id" class=" border border-black w-fit font-light text-sm px-[0.8rem] py-[0.2rem] rounded-full border-solid">{{ membership.label }}</div>
                </div>
              </div>
              <div class="sev_">
                <h2 class="text-lg font-medium">Qualifications</h2>
                <div class="text-sm font-light flex justify-start flex-wrap gap-3 mx-0 my-[0.4rem]">
                  <div v-for="qualification in selectedEnvoy.qualifications" :key="qualification.id" class=" border border-black w-fit font-light text-sm px-[0.8rem] py-[0.2rem] rounded-full border-solid">{{ qualification.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore';
const db = useFirestore();

const loading = ref(true);
const envoysVisible = ref(false);
const slideMenuActive = ref(false);
const envoys = ref([]);
const selectedEnvoy = ref([]);

fetchEnvoys();

async function fetchEnvoys() {
  try {
    const data = [];
    const envoysSnapshot = await getDocs(collection(db, "envoys"));
    envoysSnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    envoys.value = data;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
  }
};

const listEnvoys = () => {
  envoysVisible.value = true;
};

const hideEnvoys = () => {
  envoysVisible.value = false;
};

const formatDate = (date) => {
  return date ? date.toDate().toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : '';
};

const showEnvoyProfile = (envoyId) => {
  const envoy = envoys.value.find(envoy => envoy.id === envoyId);
  if (envoy) {
    selectedEnvoy.value = envoy;
    slideMenuActive.value = true;
  } else {
    selectedEnvoy.value = []
    alert("Envoy not found with the specified ID.");
  }
};

const closeSlideMenu = () => {
  slideMenuActive.value = false;
};
</script>

<style lang="postcss" scoped>
td {
  @apply text-left align-middle font-light text-sm text-black p-4 border-b-[rgba(255,255,255,0.1)] border-b border-solid;
}

.envoys .table .slide-menu .content .body .values .value {
  @apply text-sm font-light;
}

.envoys ::-webkit-scrollbar {
  @apply w-0.5;
}
.envoys ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
}
.envoys ::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
}
</style>