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
    const align = meme.lines[gMeme.selectedLineIdx].align
    const lineWidth = meme.lines[gMeme.selectedLineIdx].width
    drawImg(imgId, clr, fontSize, align, lineWidth, txt)
}

function drawImg(id, clr, size, align, width, txt) {
    var img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(txt, clr, size, align, width, 150, 50)
    };
}

function drawText(txt, clr, size, align, width, x, y) {
    gCtx.font = `${size}px Impact`
    gCtx.textBaseLine = 'middle'
    gCtx.textAlign = align
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = width
    gCtx.strokeText(txt, x, y)
    gCtx.fillStyle = clr
    gCtx.fillText(txt, x, y)
}

function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}

function onSetColor(val) {
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


function onSwitchLine() {
    console.log('working!');
    // renderMeme()
}








//----------------An attempt for hold mouse event-----------------


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


