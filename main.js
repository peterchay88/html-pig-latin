const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

const createWindow = () => { // Create an instance of the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './src/javaScript/preload.js')
        }
    })

    win.loadFile('./src/html/index.html')
}

app.whenReady().then(() => { // Launch the app 
    createWindow()
  
    app.on('activate', () => { // If no windows are open on launch then open a window
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })