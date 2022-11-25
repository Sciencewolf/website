const changeImages = (count) => {
    let arrayOfPics = ["download.png", "download2.png", "download3.png"]
    let imgTag = document.createElement('img')
    imgTag.src = arrayOfPics[count]

    imgTag.id = "Pic 1"
    let getEl = document.getElementById('main')
    getEl.appendChild(imgTag)

    // id.innerHTML = `<img src="${arrayOfPics[count]} alt="Pic1"`
    
}