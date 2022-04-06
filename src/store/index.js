import Vue from 'vue'
import Vuex from 'vuex'
import DataTable from "./Modules/DataTable";

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    DataTable
  }
})

export default store
