<template>
  <button @click="triggerEvent">
    Trigger event!
  </button>
  <button @click="triggerView">
    Trigger event!
  </button>
</template>

<script lang="ts" setup>
  const gtm = useGtm()

  function triggerEvent() {
    gtm.trackEvent({
      event: 'test gtm package',
      category: 'category',
      action: 'click',
      label: 'My custom component trigger',
      value: 5000,
      noninteraction: false,
    })
  }

  function triggerView() {
    gtm.trackView('Test', '/test')
  }
</script>
