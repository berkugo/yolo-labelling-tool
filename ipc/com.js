const { ipcMain, dialog } = require("electron")


const handleEvents = (win) => {

    ipcMain.on('fileOps', async (event, args) => {
        const selectedPaths = await dialog.showOpenDialog(win, { properties: ['openDirectory'] });
        event.sender.send("selectedFiles", selectedPaths.filePaths)
    });
}
module.exports = handleEvents