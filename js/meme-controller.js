'use strict'


let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
    // renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const imgId = meme.selectedImgId
    const txt = meme.lines[gMeme.selectedLineIdx].txt
    const clr = meme.lines[gMeme.selectedLineIdx].color
    drawImg(imgId, clr, txt)
}

function drawImg(id, clr, txt) {
    var img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(txt, clr, 150, 50)
    };
}

function drawText(txt, clr, x, y) {
    gCtx.font = '40px Impact'
    gCtx.textBaseLine = 'middle'
    gCtx.textAlign = 'center'
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    gCtx.fillStyle = clr
    gCtx.fillText(txt, x, y)
}

function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}

function onSetColor(val) {
    console.log(val);
    setColor(val)
    renderMeme()
}