<template>
  <div class="summary">
    <div class="summary__container">
      <h2 class="summary__title">Available entris</h2>
      <ul
        class="summary__data"
        v-for="(entry, index) in summaryData" :key="index">
        <li>{{ entry }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'summary-component',
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      summaryData: state => state.summaryData,
    }),
  },
};
</script>

