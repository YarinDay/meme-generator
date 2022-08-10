'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'happy'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'happy'] }
];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
var gTextBorderColor = '#121212'
var gTextColor = '#EEFF00'

function getMeme() {
    return gMeme
}


function setLineTxt() {
    let userText = document.querySelector('.user-text').value
    gMeme.lines[0].txt = userText
    renderMeme()
}


function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setTextBorderColor(color) {
    gTextBorderColor = color
    renderMeme()
}

function setTextColor(color) {
    gTextColor = color
    renderMeme()
}

// function setImg(meme) {
//     let imgPicked
//     gImgs.forEach(img => {
//         if (img.id === meme.selectedImgId) {
//             imgPicked = img.url
//         }
//     })
//     return imgPicked
// }