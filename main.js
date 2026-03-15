const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')

let win

function createWindow () {

  win = new BrowserWindow({
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

  // Проверка каждые 10 минут
  setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 600000)

})


// Когда обновление скачано
autoUpdater.on('update-downloaded', () => {

  autoUpdater.quitAndInstall()

})