const remote = require('electron').remote
const main = remote.require('./index.js')

var myfiles= document.getElementById('MyFiles')
myfiles.addEventListener('click', () => {
    var window = remote.getCurrentWindow()
    main.openWindow('myfiles')
    window.close()
    document.body.appendChild(myfiles)
}, false)

var myapps= document.getElementById('MyApps')
myapps.addEventListener('click', () => {
    var window = remote.getCurrentWindow()
    main.openWindow('myapps')
    window.close()
    document.body.appendChild(myapps)
}, false)
