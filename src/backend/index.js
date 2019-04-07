import store from '../popup/store'
import {getItems} from './api'
chrome.runtime.onMessage.addListener(({productTitle}) => {
  let query = productTitle.trim()
  store.dispatch('retrieveItems', {query: query})
  setTimeout(() => console.log(store.getters.getItemData), 5000)
})
