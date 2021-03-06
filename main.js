var app = require('app');  // Module to control application life.
var fs = require('fs');
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
  //   app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 600, icon: './img/icon.png'});

  // fs.readFileSync('./domain');

  // and load the index.html of the app.
  mainWindow.loadUrl('https://cloud.nicolas-brousse.net:5051');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // mainWindow = null;
  });
});
