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
            txt: 'I sometimes eat falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function createImg(id, url, keywords) {
    let img = {
        id,
        url,
        keywords
    }
    return img
}
