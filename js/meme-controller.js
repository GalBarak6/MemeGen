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
    const fontSize = meme.lines[gMeme.selectedLineIdx].size
    drawImg(imgId, clr, fontSize, txt)
}

function drawImg(id, clr, size, txt) {
    var img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(txt, clr, size, 150, 50)
    };
}

function drawText(txt, clr, size, x, y) {
    gCtx.font = `${size}px Impact`
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

function onSetFontSize(symbol) {
    // addListeners()
    if (symbol === '+') setFontSize(+1)
    // if (symbol === '+') onDown(+1)
    if (symbol === '-') setFontSize(-1)
    // if (symbol === '-') onDown(-1)
    renderMeme()
}


// var timer = null

// function addListeners() {
//     addMouseListeners()
//     // addTouchListeners()
// }

// function addMouseListeners() {
//     // gElCanvas.addEventListener('mousemove', onMove)
//     // gElCanvas.addEventListener('mousedown', onDown)
//     // gElCanvas.addEventListener('mouseup', onUp)
//     const elFont = document.querySelector('.font1')
//     elFont.addEventListener('mousedown', onDown)
//     elFont.addEventListener('mouseup', onUp)
    
// }

// // function addTouchListeners() {
// //     // gElCanvas.addEventListener('touchmove', onMove)
// //     gElCanvas.addEventListener('touchstart', onDown)
// //     gElCanvas.addEventListener('touchend', onUp)
// // }

// function onDown(indicator) {
//     timer = setInterval(() => {
//         console.log('Im down!');
//         setFontSize(indicator)
//         renderMeme()
//     },500)
// }

// function onUp() {
//     clearInterval(timer)
//     timer = null
//     console.log('Im not down anymore!!');
//     console.log(timer);
// }


