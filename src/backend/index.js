import store from '../popup/store'

store.dispatch('retrieveItems', {query: 'earphones'})
console.log('queries ran')
