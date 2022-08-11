'use strict'


function renderCanvas() {

}

function renderMeme() {
    const meme = getMeme()
    drawImg(meme)

    console.log('gMeme INIT', meme);

}



function onImgSelect(imgId) {
    hideGallery()
    setImg(imgId)
    renderMeme()
}

// function getTextBorderColor(elColor) {
//     setTextBorderColor(elColor)
// }

function getTextColor(elColor) {
    setTextColor(elColor)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    document.querySelector('.user-text').value = gMeme.lines[gMeme.selectedLineIdx].txt
    document.querySelector('.shape-color').value = gMeme.lines[gMeme.selectedLineIdx].textColor
    renderMeme()
}

function onAddLine() {
    addLine(getLineTxt(), gMeme.lines[gMeme.selectedLineIdx].textColor)
    document.querySelector('.user-text').value = ''
    renderMeme()
}

function getLineTxt() {
    return document.querySelector('.user-text').value

}

function setLineTxt() {
    if (!gMeme.lines.length) return
    let userText = document.querySelector('.user-text').value
    gMeme.lines[gMeme.selectedLineIdx].txt = userText
    renderMeme()
}

function onAlignLeft() {
    textAlignLeft()
    renderMeme()
}
function onAlignCenter() {
    textAlignCenter()
    renderMeme()
}
function onAlignRight() {
    textAlignRight()
    renderMeme()
}

function onClickRandMeme() {
    const randNum = getRandomInt(1, gImgs.length + 1)
    hideGallery()
    setImg(randNum)
    renderMeme()
    console.log('randNum', randNum);
}