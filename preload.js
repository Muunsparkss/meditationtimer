const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  startTimer: (seconds) => ipcRenderer.send('start-timer', seconds),
});