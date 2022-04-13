'use strict'



function renderGallery() {
    const imgs = getImgs()
    const strHTMLS = imgs.map(img => {
        return `<img src="img/${img.id}.jpg" alt="" class="gallery-image img-${img.id}" onclick="onImgSelect(${img.id})"></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}