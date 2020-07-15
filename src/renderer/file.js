const { ipcRenderer } = window.require("electron")
const fs = window.require("fs")

const buttonClicked = () => {

    ipcRenderer.send("fileOps");

}
const fileListener = (cb) => {

    ipcRenderer.on("selectedFiles", cb)
}

const readFromFolder = async (ppath) => {
    const imagesArray = [], fileNames = []
    fs.readdirSync(ppath).forEach((item) => {
        const result = item.split('.').includes("jpg") || item.split('.').includes("png") || item.split('.').includes("jpeg")
        if (result)
        {
            fileNames.push(item)
            imagesArray.push(fs.readFileSync(`${ppath}/${item}`, "base64"))
        }
    })
    return Promise.resolve({fileNames: fileNames, images: imagesArray})
}


module.exports.openFileEvent = buttonClicked
module.exports.fileListener = fileListener
module.exports.readFromFolder = readFromFolder