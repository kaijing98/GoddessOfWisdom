import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'

import {getItems} from '../backend/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({storage: window.localStorage})],
  state: {
    items: [],
    isLoggedIn: false
  },
  mutations: {
    async storeItems (state, {itemSummaries, query}) {
      let items = _.filter(itemSummaries, item => item.image)
      items = _.filter(items, item => {
        return (
          _.includes(item.title.toLowerCase(), query.toLowerCase()) &&
          _.includes(item.title.toLowerCase(), 'sustainable')
        )
      })
      Vue.set(state, 'items', items.slice(0, 10))
    },
    setLogIn (state, status) {
      state.isLoggedIn = status
    }
  },
  actions: {
    async retrieveItems ({commit}, {query}) {
      let {itemSummaries} = await getItems(query)
      commit('storeItems', {itemSummaries, query})
    },

    async login ({commit}) {
      commit('setLogIn', true)
    }
  },
  getters: {
    getItemData: state => state.items
  }
})
