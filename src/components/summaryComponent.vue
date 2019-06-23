<template>
  <div class="summary">
    <div class="summary__container">
      <h2 class="summary__title">Available entries</h2>
        <ul
          v-if="summaryDataLenght >= 3"
          :key="summaryDataLenght">
          <li v-for="(entry, index) in summaryData" :key="index">
          <span>{{ index.charAt(0).toUpperCase()+ index.slice(1).replace(/([A-Z])/g, ' $1') }}:
          </span>{{ entry }}</li>
        </ul>
        <h4 v-else :key="summaryDataLenght" class="summary__title--sub">No entries</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'summary-component',
  props: {
    summaryData: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  computed: {
    summaryDataLenght() {
      return Object.keys(this.summaryData).length;
    },
  },
};
</script>
<style lang="scss" scoped>
.summary {
  &__container {
    margin: 2rem auto;
  }
  &__title {
    font-weight: 400;
    &--sub {
      color: $color-purple;
    }
  }
  &__data {
    font-weight: 400;
    font-size: caclRem(12);
    padding-left: 0.4rem;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;

    span {
      font-weight: 700;
    }
  }
}
</style>
