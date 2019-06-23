<template>
  <div class="summary">
    <div class="summary__container">
      <h2 class="summary__title">Available entries</h2>
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
      storeSummaryData: state => state.summaryData,
    }),
    summaryData() {
      return this.storeSummaryData;
    },
  },
};
</script>
<style lang="scss" scoped>
.summary {
  &__title {
    font-weight: 400;
  }
  &__data {
    font-weight: 400;
    font-size: caclRem(12);
    padding-left: 0.4rem;
    margin: 1rem 0;
  }
}
</style>
