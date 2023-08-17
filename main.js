const { app, BrowserWindow, shell } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('./scr/ui/index.html')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});