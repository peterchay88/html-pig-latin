const { app, BrowserWindow } = require('electron/main');

const createWindow = () => { // Create an instance of the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('./src/html/index.html')
}

app.whenReady().then(() => { // Launch the app 
    createWindow()
  
    app.on('activate', () => { // If no windows are open on launch then open a window
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })