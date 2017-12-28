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


/**not working -- deleted 'backToMain' from html files
var mainWin = document.getElementById('backToMain')
mainWin.addEventListener('click', () => {
    var window = remote.getCurrentWindow()
    main.openWindow('mainWindow')
    window.close()
    document.body.appendChild(mainWin)
}, false)
**/

