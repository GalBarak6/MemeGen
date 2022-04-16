'use strict'

let gIsLineAdded = false
let gElCanvas
let gCtx

//on page load -> getting canvas El, rendering gallery
function onInit() {
    gIsLineAdded = false
    gElCanvas = document.querySelector('.my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
}

//rendering the meme with the clicked img + line settings
function renderMeme() {
    gCtx.beginPath()
    const meme = getMeme()
    const imgId = meme.selectedImgId
    const lineIdx = meme.selectedLineIdx
    // const txt = meme.lines[lineId].txt
    // const clr = meme.lines[lineId].color
    // const fontSize = meme.lines[lineId].size
    // const align = meme.lines[lineId].align
    // const x = meme.lines[lineId].x
    // const y = meme.lines[lineId].y
    drawImg(imgId, lineIdx)
}

//drawing the img on the canvas board
function drawImg(id, lineIdx) {
    const meme = getMeme()
    const lines = meme.lines
    var img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
            lines.forEach(line => {
                drawText(line.txt, line.color, line.size, line.align, line.x, line.y, line.font, line.strokeClr)
            })
            if(lineIdx === 0) {
                drawRect(1, 1)
            } else if(lineIdx === 1) {
                drawRect(1,295)
            } else if(gIsLineAdded && lineIdx === 2) {
                drawRect(1,130)
            }
    }  
}


//drawing the txt on the canvas board
function drawText(txt, clr, size, align, x, y, font, strokeClr) {
    gCtx.font = `${size}px ${font}`
    gCtx.textBaseLine = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 4
    gCtx.strokeStyle = `${strokeClr}`
    gCtx.strokeText(txt, x, y)
    gCtx.fillStyle = clr
    gCtx.fillText(txt, x, y)
}

//when user writes in the textarea -> every input operates this function to change the txt on service
function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}

//when color btn clicked -> sending to service the clr
function onSetColor(val) {
    setColor(val)
    renderMeme()
}

//when font size clicked(+ or -) checking the symbol they sent, then sending to service with the right symbol
function onSetFontSize(symbol) {
    // addListeners()
    if (symbol === '+') setFontSize(+1)
    // if (symbol === '+') onDown(+1)
    if (symbol === '-') setFontSize(-1)
    // if (symbol === '-') onDown(-1)
    renderMeme()
}

//when switch line icon pressed -> cleaning placeholder and going to service for idx change
function onSwitchLine() {
    document.querySelector('[name=user-text]').value = ''
    switchLine()
    renderMeme()
}

//drawing a Rect when a line is focused
function drawRect(x, y) {
    gCtx.lineWidth = 5
    gCtx.rect(x, y, 397, 100)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

//Trash icon -> clearing the txt, back to default clr, clearing placeholder
function onClear() {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = 'white'
    meme.lines[meme.selectedLineIdx].txt = ''
    document.querySelector('[name=user-text]').value = ''
    renderMeme()
}

//all 3 align btns operates this func -> sending the align direction to service
function onAlignTxt(direction) {
    alignTxt(direction)
    renderMeme()
}

// + icon clicked -> changing boolean var to true and adding line in service model
function onAddLine() {
    if(gIsLineAdded) return
    gIsLineAdded = true
    addLine()
    renderMeme()
}

//back to default - as it appears on init(without third line) and with focus on first line
function onDefaultLine() {
    const meme = getMeme()
    gIsLineAdded = false
    meme.selectedLineIdx = 0
    document.querySelector('[name=user-text]').value = ''
    renderMeme()
}

//when font type clicked - sending the picked font to service
function onFontPick(font) {
    console.log(font);
    fontPick(font)
    renderMeme()
}

//when stroke color clicked - sending the picked clr to service
function onSetStroke(clr) {
    console.log(clr);
    setStroke(clr)
    renderMeme()
}

//when download btn clicked - sending the url to the href html
function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme';
}

//when im flexible clicked -> sending to service to randomize settings
function onRandomMeme() {
    randomMeme()
    document.querySelector('.main-content').hidden = true
    document.querySelector('.about').hidden = true
    document.querySelector('.canvas').hidden = false
    renderMeme()
}

//setting the selected filter, sending to service and rendering imgs by it
function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderGallery()
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


