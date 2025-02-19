const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

// Create an instance of the browser window.
const createWindow = () => { 
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './src/javaScript/preload.js')
        }
    })

    win.loadFile('./src/html/index.html')

    // // Add event listener for resizing the window
    // win.on("resize", () => {
    //     const [width, height] = win.getSize();
    //     console.log(`The window is now ${width} x ${height}`);
    // })
}

// Launch the app 
app.whenReady().then(() => { 
    createWindow()
    
    // If no windows are open on launch then open a window
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })