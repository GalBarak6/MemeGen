'use strict'


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
            align: 'left',
            color: 'white',
        },
        {
            txt: 'What is the difference?!',
            size: 40,
            align: 'center',
            color: 'white',
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

function setFontSize(indicator) {
    gMeme.lines[gMeme.selectedLineIdx].size += indicator
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
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
