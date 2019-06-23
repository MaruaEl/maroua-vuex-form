<template>
  <main class="container">
    <transition name="fade-enter">
      <summary-component
        :summaryData="storeSummaryData"
      />
    </transition>
    <form-component
      :showForm="showForm"
      :key="showForm"
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
      storeSummaryData: state => state.summaryData,
    }),
  },
  methods: {
    ...mapActions(['submitData']),
  },
};
</script>
