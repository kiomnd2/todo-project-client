import Vue from 'vue';
import Vuex from 'vuex';
import action from './action';
import getters from './getters';
import mutations from './mutations';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  counter: 0,
  userState : {
    userId : '',
    userNm : '',
  }
};


const store = new Vuex.Store({
  state,
  action,
  getters,
  mutations,
  plugins: [
    createPersistedState()
  ]
});


export default store;