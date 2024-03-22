<template>
  <div class="" id="app">
    <NuxtPage />
  </div>
</template>

<script setup>
function allConsentGranted() {
  const { gtag } = useGtag()
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  })
}

onMounted(() => {
  allConsentGranted();
});
</script>