import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import {getItems} from '../backend/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState({storage: window.sessionStorage})],
  state: {
    items: []
  },
  mutations: {
    async storeItems (state, itemSummaries) {
      // Vue.set(state, 'items', ['hello'])
      state.items.push(...itemSummaries)
    }
  },
  actions: {
    async retrieveItems ({commit}, {query}) {
      let {itemSummaries} = await getItems(query)
      commit('storeItems', itemSummaries)
    }
  },
  getters: {
    getItemData: state => state
  }
})
