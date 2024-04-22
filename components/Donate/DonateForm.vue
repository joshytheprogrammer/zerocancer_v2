<template>
  <div class="block w-full px-4 lg:px-0 mx-auto my-20"> 
    <div class="max-w-[80%] grid grid-cols-2 justify-start items-center gap-8 mx-auto">
      <img class="col-span-1 w-full h-[640px] object-cover" src="https://images.unsplash.com/photo-1534180079718-c54f5e889c4f?q=80&w=2576&auto=format&fit=crop" alt="form side">
      <div class="col-span-1">
        <div class="mx-auto text-center" v-if="loading.status" >
          <GlobalHelpersLoader/>
          <p class="py-4">{{ loading.comment }}</p>
        </div>
        <div v-if="showDonationPage.status">
          <GlobalHelpersModal @closeModal="closeDonationPage">
            <template #header>Thank you for donating</template>
            <template #body>
              <iframe :src="showDonationPage.url" frameborder="0" scrolling="yes" style="width:100%; height:580px"></iframe>
              <p class="pb-6">You may close this popup after payment.</p>
              <button @click="closeDonationPage" class="w-full mx-0 my-4 text-center text-xs px-3 py-4 lg:w-fit lg:text-base lg:px-4 lg:py-2 bg-primary-600 text-white block cursor-pointer rounded-xl border">Close Popup</button>
            </template>
          </GlobalHelpersModal>
        </div>
        <div class="w-full" v-if="loading.status != true">
          <DonateHelpersForm @submit="initializeDonation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const showDonationPage = reactive({
  status: false,
  url: null,
  ref: null
})

const loading = reactive({
  status: false,
  comment: "Please wait while we process your donation information"
});

async function initializeDonation(formData) {
  setLoading(true, "Please wait while we process your donation information")

  try {
    await $fetch('/api/payments/donate/initialize', {
      method: "POST",
      body: { 
        formData: formData
      }
    }).then((res) => {
      setLoading(true, "We are awaiting your donation.")
      // console.log(res)

      if(res.status != true) {setLoading(false, null)} // Do error handling here

      loadDonationPage(res.data.reference, res.data.access_code)
    });
  }catch (e) {

  }
}

async function verifyDonation(ref) {
  setLoading(true, "We are verifying your transaction - "+ref)

  try {
    await $fetch('/api/payments/donate/verify', {
      method: "POST",
      body: { 
        ref: ref
      }
    }).then((res) => {
      console.log(res)

      if(res.status != true) {} // Do error handling here

      if(res.data.status == "success") {
        // Donation successful. Show Donation Success notification.
        setLoading(false, null)
      }else {

      }
    });
  }catch(e) {

  }
}

function setLoading(status, comment) {
  loading.status = status
  loading.comment = comment
}

function loadDonationPage(ref, access) {
  showDonationPage.status = true
  showDonationPage.url = 'https://checkout.paystack.com/'+access
  showDonationPage.ref = ref
}

function closeDonationPage(){
  showDonationPage.status = false; 
  showDonationPage.url = null
  verifyDonation(showDonationPage.ref)
  showDonationPage.ref = null
}
</script>

<style lang="scss" scoped>

</style>