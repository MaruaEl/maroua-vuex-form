<template>
  <main class="container">
    <summary-component></summary-component>
    <form-component
      :hideForm="showForm"
      @handleSuccess="submitData"
    />
  </main>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import summaryComponent from '../components/summaryComponent.vue';
import formComponent from '../components/formComponent.vue';

export default {
  name: 'index',
  components: {
    summaryComponent,
    formComponent,
  },
  computed: {
    ...mapState({
      showForm: state => state.showForm,
    }),
  },
  methods: {
    ...mapActions(['submitData']),
  },
};
</script>
<style lang="scss" scoped>

</style>

