<template>
  <div class="explorer block w-full shadow-md lg:flex justify-around items-center gap-8 mx-0 my-8 px-4 lg:px-16 py-8 rounded-2xl border-none">
    <div class="" v-show="loading">
      <GlobalHelpersLoader />
    </div>
    <select id="state" name="state" v-model="selectedStateID" @change="populateRegion">
      <option value="" disabled selected>Select a State</option>
      <option v-for="item in states" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>

    <select id="region" name="region" v-model="selectedRegionID">
      <option v-if="selectedStateID == ''" value="" disabled selected>Please select a state first</option>
      <option v-else value="" disabled selected>Select Region</option>

      <option v-for="item in regionToShow" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>

    <button @click="populateCentre" class="w-full lg:w-fit bg-primary-600 text-white text-center h-16 cursor-pointer px-8 py-4 rounded-md border-none" :disabled="selectedRegionID == ''">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8"/></svg>
    </button>
    {{ centresToShow }}
  </div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore'
const db = useFirestore();

fetchCentres()

const states = ref([]);
const regions = ref([]);
const centres = ref([]);

const loading = ref(true);

const selectedStateID = ref('');
const selectedRegionID = ref('');

const regionToShow = ref([])
const centresToShow = ref([])

function populateRegion() {
  selectedRegionID.value = ''
  regionToShow.value = []

  const selectedState = states.value.find((state) => state.id === selectedStateID.value);
  
  selectedState.regions.forEach((regionId) => {
    const matchingRegion = regions.value.find((region) => region.id === regionId);
    
    if (matchingRegion) {
      regionToShow.value.push(matchingRegion)
    }
  });
}

function populateCentre() {
  const selectedRegion = regions.value.find((region) => region.id === selectedRegionID.value);

  // Extract centre IDs from the selectedRegion
  const centreIds = selectedRegion.centres;

  // Use the centre IDs to filter the relevant centres
  centresToShow.value = centres.value.filter((centre) => centreIds.includes(centre.id));
}

async function fetchCentres() {
  const stateSnapshot = await getDocs(collection(db, 'locations', 'states', 'state'));
  const regionSnapshot = await getDocs(collection(db, 'locations', 'regions', 'region'));
  const centreSnapshot = await getDocs(collection(db, 'locations', 'centres', 'centre'));

  states.value = stateSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  regions.value = regionSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  centres.value = centreSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  loading.value = false;
  // console.log(states.value, regions.value, centres.value)
}


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