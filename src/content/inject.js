var content = chrome.extension.getURL('js/content.js')
var script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', content)
document.body.appendChild(script)
const titleWithAmazon = document.getElementsByName('keywords')[0].content
const title = titleWithAmazon.split(', ')[0]
chrome.runtime.sendMessage('hfmhmekbejegcnndldeipoppfmbeaile', {
  productTitle: title
})
