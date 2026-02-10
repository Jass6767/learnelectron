const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', async ()=> 'pong')
    createWindow()
})