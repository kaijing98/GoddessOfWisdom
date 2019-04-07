import * as blockstack from 'blockstack'
var content = chrome.extension.getURL('js/content.js')
var script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', content)
document.body.appendChild(script)
const titleWithAmazon = document.getElementsByName('keywords')[0].content
console.log(titleWithAmazon)
const title = titleWithAmazon.split(', ')[0]
chrome.runtime.sendMessage('hfmhmekbejegcnndldeipoppfmbeaile', {
  productTitle: title,
})

chrome.runtime.onMessage.addListener(async message => {
  const authRequest = blockstack.makeAuthRequest(
    null,
    `${window.location.origin}/`,
    `https://winsonhys.github.io/manifest.json`,
    ['store_write'],
    'https://winsonhys.github.io/',
  )
  console.log(authRequest)
  try {
    blockstack.redirectToSignInWithAuthRequest(authRequest)
  } catch (e) {
    console.log(e)
  }
})
