import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    sfc_selected_o:null,
  },
  actions:{
  	
  },
  mutations: {
    sfc_selected(state,payload) {
      state.sfc_selected_o = payload;
    }
  }
})

export default store