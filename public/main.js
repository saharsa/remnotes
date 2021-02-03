const { app, BrowserWindow } = require('electron')
const path = require('path')
//const isDev = require('electron-is-dev'); 

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //win.loadURL('http://localhost:3000')
  //isDev ? 'http://localhost:3000' : 
  const isDev = process.env.REACT_APP_ENV;
  let startURL = `file://${path.join(__dirname, '../build/index.html')}`;
  if(isDev!=undefined && isDev.slice(0, -1)=='dev') {
    startURL = 'http://localhost:3000';
  }
  win.loadURL(startURL)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})