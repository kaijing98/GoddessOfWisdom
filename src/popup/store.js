import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import {getItems} from '../backend/api.js'

Vue.use(Vuex)

let store = new Vuex.Store({
  // plugins: [createPersistedState({storage: window.sessionStorage})],
  state: {},
  mutations: {
    async storeItems (state, {itemSummaries}) {
      Vue.set(state, 'items', itemSummaries)
    }
  },
  actions: {
    async retrieveItems ({commit}, {query}) {
      let items = await getItems(query)
      commit('storeItems', items)
    }
  },
  getters: {
    getItemData: state => state.items
  }
})

export default store
