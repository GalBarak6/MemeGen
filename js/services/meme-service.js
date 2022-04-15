'use strict'

const gDefaultLine1 = {
    txt: 'DOM or MODEL?',
    size: 40,
    align: 'center',
    color: 'white',
    x: 200,
    y: 50,
}

const gDefaultLine2 = {
    txt: 'NEITHER',
    size: 40,
    align: 'center',
    color: 'white',
    x: 200,
    y: 350
}


let gImgs = [
    createImg(1, 'img/1.jpg', ['funny', 'politics']),
    createImg(2, 'img/2.jpg', ['funny', 'dogs']),
    createImg(3, 'img/3.jpg', ['babies', 'dogs']),
    createImg(4, 'img/4.jpg', ['funny', 'cats']),
    createImg(5, 'img/5.jpg', ['babies', 'funny']),
    createImg(6, 'img/6.jpg', ['crazy']),
    createImg(7, 'img/7.jpg', ['babies', 'shock']),
    createImg(8, 'img/8.jpg', ['funny', 'happy']),
    createImg(9, 'img/9.jpg', ['babies', 'laugh'])
]

let gMeme = {
    selectedImgId: 4,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'DOM or MODEL?',
            size: 40,
            align: 'center',
            color: 'white',
            x: 200,
            y: 50,
        },
        {
            txt: 'NEITHER',
            size: 40,
            align: 'center',
            color: 'white',
            x: 200,
            y: 350
        }
    ]
}

//returns the global variable of imgs
function getImgs() {
    return gImgs
}

//returns the global variable of meme
function getMeme() {
    return gMeme
}

//changes the txt over the canvas according to user
function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

//after clicking an img - set the id of it in the model
function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

//after picking a color by the user - update the model color
function setColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].color = val
}

//setting the font size in the model
function setFontSize(indicator) {
    gMeme.lines[gMeme.selectedLineIdx].size += indicator
}

//switch the line which we write in + focusing it with a drawRect
function switchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
}

//set back to default settings both lines
function SetDefaultLine() {
    let default1 = Object.assign({}, gDefaultLine1)
    let default2 = Object.assign({}, gDefaultLine2)
    gMeme.lines[0] = default1
    gMeme.lines[1] = default2
}

//create img - returns object
function createImg(id, url, keywords) {
    let img = {
        id,
        url,
        keywords
    }
    return img
}


