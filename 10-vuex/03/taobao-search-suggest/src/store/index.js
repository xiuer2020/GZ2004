import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      suggests: []
    },
    getters: {},
    mutations: {
      updateSuggests: function (state, payload) {
        state.suggests = payload.suggests
      }
    },
    actions: {},
    modules: {},
});
