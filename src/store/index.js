import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    fetchCharacters(state) {
      state.characters = [{ name: 'Test character' }];
    },
  },
});
