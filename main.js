const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')

function createWindow () {

  const win = new BrowserWindow({
    fullscreen: true,
    kiosk: true,
    autoHideMenuBar: true
  })

  win.loadFile('index.html')

}

app.whenReady().then(() => {

  createWindow()

  // Проверка обновлений
  autoUpdater.checkForUpdatesAndNotify()

})

autoUpdater.on('update-downloaded', () => {

  autoUpdater.quitAndInstall()

})