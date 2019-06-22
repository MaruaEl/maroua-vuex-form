<template>
  <main class="container">
    <summary-component></summary-component>
    <form-component></form-component>
  </main>
</template>
<script>
import summaryComponent from '../components/summaryComponent.vue'
import formComponent from '../components/formComponent.vue'

export default {
  name: 'index',
  components: {
    summaryComponent,
    formComponent,
  },
};
</script>
<style lang="scss" scoped>

</style>

