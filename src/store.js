import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    summaryData: {},
    showForm: true,
  },
  actions: {
    submitData({ commit }, formData) {
      commit('SET_SUMMARY_DATA', formData);
    },
  },
  mutations: {
    SET_SUMMARY_DATA(state, payload) {
      state.summaryData = payload;
      state.showForm = true;
      console.log('------------------------------------');
      console.log('store', payload, state.showForm);
      console.log('------------------------------------');
    },
  },
});
