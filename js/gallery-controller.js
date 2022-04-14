'use strict'


function renderGallery() {
    const imgs = getImgs()
    const strHTMLS = imgs.map(img => {
        return `<img src="img/${img.id}.jpg" alt="" class="gallery-image img-${img.id}" onclick="onImgSelect(${img.id})"></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS.join('')
}

function onImgSelect(imgId) {
    document.querySelector('.main-content').hidden = true
    document.querySelector('.about').hidden = true
    document.querySelector('.canvas').hidden = false
    setImg(imgId)
    renderMeme()
}

function onBackToGallery() {
    document.querySelector('.main-content').hidden = false
    document.querySelector('.about').hidden = false
    document.querySelector('.canvas').hidden = true
}

function toggleMenu() {
    document.body.classList.toggle('nav-open')
    if (document.body.classList.contains('nav-open')) document.querySelector('.toggle-nav-btn').innerText = 'X'
    else document.querySelector('.toggle-nav-btn').innerText = '☰'
}