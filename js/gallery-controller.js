'use strict'

//rendering all the imgs to the gallery
function renderGallery() {
    const imgs = getImgs()
    const strHTMLS = imgs.map(img => {
        return `<img src="img/${img.id}.jpg" alt="" class="gallery-image img-${img.id}" onclick="onImgSelect(${img.id})"></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS.join('')
}

//when img clicked -> hiding gallery and opening canvas board(editor)
function onImgSelect(imgId) {
    document.querySelector('.main-content').hidden = true
    document.querySelector('.about').hidden = true
    document.querySelector('.canvas').hidden = false
    setImg(imgId)
    renderMeme()
}

//when clicked on gallery or logo -> showing the gallery again and reseting all canvas settings
function onBackToGallery() {
    document.querySelector('.main-content').hidden = false
    document.querySelector('.about').hidden = false
    document.querySelector('.canvas').hidden = true
    document.querySelector('[name=user-text]').value = ''
    SetDefaultLine()
}

//toggle menu for mobile
function toggleMenu() {
    document.body.classList.toggle('nav-open')
    if (document.body.classList.contains('nav-open')) document.querySelector('.toggle-nav-btn').innerText = 'X'
    else document.querySelector('.toggle-nav-btn').innerText = '☰'
}