const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    // Pull version numbers 
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  })