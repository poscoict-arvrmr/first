const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    //Create new window
    mainWindow = new BrowserWindow({frame:false, fullscreen:true});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes:true
    }));
});

exports.openWindow = (filename) => {
    let win = new BrowserWindow({frame:false, fullscreen:true});
    win.loadURL(`file://${__dirname}/` + filename+ `.html`)
}