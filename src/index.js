const { app, BrowserWindow } = require('electron');
const path = require('path');
const serve = require('electron-serve');
const { triggerAsyncId } = require('async_hooks');
const loadURL = serve({directory: './src/build'});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const hiddenWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
    },
  });
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    setAutoHideMenuBar: true,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
    },
  });

  loadURL(mainWindow)
  // and load the index.html of the app.
  // hiddenWindow.loadFile(path.join(__dirname, 'build/index.html'));
  // mainWindow.loadURL(
  //    `http://localhost:3002`
  // );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

};

const createMainWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });


  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'build/index.html'));
  mainWindow.loadURL(
     `http://localhost:3002`
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // const serveStatic = require('serve-static')
  // const express = require('express')

  // const appServer = express()
  // appServer.use(serveStatic(`src/build`, {index: ['index.html']}))
  // // app.use(express.static(__dirname + '/src/build'));

  // appServer.listen(3002)

  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
