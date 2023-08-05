// const { app, BrowserWindow, shell } = require('electron')

// function createWindow() {
//   const mainWindow = new BrowserWindow({
//     width: 900,
//     height: 600,
//     resizable: false,
//     webPreferences: {
//       nodeIntegration: true,
//       enableRemoteModule: true,
//       contextIsolation: false
//     }
//   })

//   mainWindow.loadFile('./scr/ui/index.html')
// }

// app.whenReady().then(createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });


const { app, BrowserWindow } = require('electron');
const Store = require('electron-store');
const store = new Store(); 

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });

  const savedConfig = store.get('config'); 
  if (savedConfig) {
    mainWindow.loadFile('./scr/ui/index.html', {
      query: {
        config: JSON.stringify(savedConfig)
      }
    });
  } else {
    mainWindow.loadFile('./scr/ui/index.html');
  }

  mainWindow.on('close', () => {
    const currentWindow = mainWindow.getBounds();
    store.set('config', { windowBounds: currentWindow }); 
    console.log(store.get('config'));
  });
}

app.whenReady().then(createWindow);

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

