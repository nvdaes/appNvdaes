import electron, {dialog} from 'electron'
const APP_VERSION = require('../package.json').version
import log from 'log-to-file'

const AUTO_UPDATE_URL = 'https://api.update.rocks/update/github.com/nvdaes/appNvdaes/stable/' + process.platform + '/' + APP_VERSION

function init () {
  if (process.platform === 'linux') {
    console.log('Auto updates not available on linux')
  } else {
    console.log(AUTO_UPDATE_URL)
    initDarwinWin32()
  }
}

function initDarwinWin32 () {
  electron.autoUpdater.on(
    'error',
    (err) => log(`Update error: ${err.message}`, 'nvdaes'))

  electron.autoUpdater.on(
    'checking-for-update',
    () => log('Checking for update', 'nvdaes'))

  electron.autoUpdater.on(
    'update-available',
    () => log('Update available', 'nvdaes'))

  electron.autoUpdater.on(
    'update-not-available',
    () => log('No update available', 'nvdaes'))

  // Ask the user if update is available
  electron.autoUpdater.on(
    'update-downloaded',
    (event, releaseNotes, releaseName) => {
      log('Update downloaded', 'nvdaes')
      dialog.showMessageBox({
        type: 'question',
        buttons: ['Update', 'Cancel'],
        defaultId: 0,
        message: `Version ${releaseName} is available, do you want to install it now?`,
        title: 'Update available'
      }, response => {
        if (response === 0) {
          electron.autoUpdater.quitAndInstall()
        }
      })
    }
  )

  electron.autoUpdater.setFeedURL(AUTO_UPDATE_URL)
  electron.autoUpdater.checkForUpdates()
}

module.exports = {
  init
}
