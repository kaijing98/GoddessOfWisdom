import store from '../popup/store'
console.log('content-script!')
// let title = document.getElementById('productTitle')
// title.textContent = 'Test'

store.dispatch('retrieveItems', {query: 'earphones'})
console.log('queries ran')
