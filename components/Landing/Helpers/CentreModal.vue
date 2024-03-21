<template>
  <GlobalHelpersModal @closeModal="$emit('closeCentreModal')">
    <template #header>Centres Available</template>
    <template #body>
      <div class="flex flex-col justify-start">  
        <div class="w-full inline-flex justify-between items-center self-center text-xs font-medium text-black bg-primary-100 my-2 p-2 rounded-lg" v-show="showingSellerMessageBadge">
          <p>The <b>"Seller"</b> badge refers to centres that sell our Self Samplers and HPV Kits. </p>
          <span class="text-center cursor-pointer pt-1 hover:text-secondary-900" @click="showingSellerMessageBadge = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
          </span>
        </div>
        <form class="max-w-sm my-4">
          <label class="block mb-2 text-sm font-medium text-primary-900 ">Sort Centres</label>
          <select v-model="sortingBy" class="block w-full p-2 mb-6 text-sm text-primary-900 border border-primary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white ">
            <option value="isSeller">Is Seller</option>
            <option value="managerNameAsc">Manager Name in Ascending Order</option>
            <option value="managerNameDesc">Manager Name in Descending Order</option>
            <option value="centreNameAsc">Centre Name in Ascending Order</option>
            <option value="centreNameDesc">Centre Name in Descending Order</option>
          </select>
        </form>
                
        <template v-for="centre in centres" :key="centre.id">
          <h2 class="font-medium text-xl lg:font-semibold lg:text-2xl pb-2">{{centre.name}}</h2>
          <p class="text-sm lg:text-base">{{centre.managerName}}</p>

          <div class="border shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-0 my-4 p-4 rounded-lg border-solid border-[rgba(0,0,0,0.1)]">
            <div class="flex justify-start gap-3 flex-wrap">
              <div class=" block w-fit border bg-primary-200 border-primary-800 text-black text-xs mb-4 px-4 py-2 rounded-full border-solid">{{centre.services}}</div>
              <div v-show="centre.isSeller" class="bg-primary-800 text-white text-xs font-medium block w-fit mb-4 px-4 py-2 rounded-full">Seller</div>
            </div>
            <div class="px-0 py-3">
              <p class="text-sm lg:text-lg pb-2">{{centre.name}} is located here</p>
              <p class=" font-bold flex justify-start flex-wrap items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                <a class=" underline text-primary-800 inline-flex flex-wrap items-center gap-1" :href="centre.mapsLink" target="_blank">
                  <span>({{centre.address.substring(0, 24)}}...)</span> 
                  <span>Find on maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 0v1664h-384v384H0V384h384V0zm-128 1536V128H512v256h256v128H128v1408h1408v-640h128v256zm-979-339l-90-90l594-595h-421V384h640v640h-128V603z"/></svg>
                </a>
              </p>
            </div>
            <div class="px-0 py-3">
              <p class="text-sm lg:text-lg pb-2">For inquiries</p>
              <p class=" font-bold flex justify-start flex-wrap items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                <span>
                  <template v-for="(number, index) in centre.phone.split(',')" :key="index" >
                    <a :href="`tel:${number.trim()}`" class="underline text-primary-800 inline-flex items-center gap-1">{{ number.trim() }}</a>
                    <span v-if="index !== centre.phone.split(',').length - 1">, </span>
                  </template>
                </span>
                </p>
            </div>
            <a class="w-full mx-0 my-4 text-center text-xs px-3 py-6 lg:w-fit lg:text-base lg:px-8 lg:py-4 bg-primary-600 text-white block cursor-pointer rounded-xl border" :href="centre.formLink" >{{centre.isSeller ? 'Schedule a Purchase' : 'Schedule an appointment'}}</a>
          </div>
        </template>
      </div>

    </template>
  </GlobalHelpersModal>
</template>

<script setup>
const props = defineProps(['rawCentres']);

const centres = computed(() => {
  const sortedCentres = props.rawCentres;
  
  switch (sortingBy.value) {
    case 'managerNameAsc':
      return sortedCentres.sort((a, b) => a.managerName.localeCompare(b.managerName));
    case 'managerNameDesc':
      return sortedCentres.sort((a, b) => b.managerName.localeCompare(a.managerName));
    case 'centreNameAsc':
      return sortedCentres.sort((a, b) => a.name.localeCompare(b.name));
    case 'centreNameDesc':
      return sortedCentres.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sortedCentres.sort((a, b) => (a.isSeller && !b.isSeller) ? -1 : ((!a.isSeller && b.isSeller) ? 1 : 0));
  }
});

const showingSellerMessageBadge = ref(true);
const sortingBy = ref('isSeller'); // Set default sorting criteria
</script>

