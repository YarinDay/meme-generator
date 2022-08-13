'use strict'


function renderMeme() {
    const meme = getMeme()
    drawImg(meme)
}

function onImgSelect(imgId) {
    hideGallery()
    setImg(imgId)
    renderMeme()
}

function getTextBorderColor(elColor) {
    setTextBorderColor(elColor)
    renderMeme()
}

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
    document.querySelector('.text-color').value = gMeme.lines[gMeme.selectedLineIdx].textColor
    renderMeme()
}

function onAddLine() {
    addLine(getLineTxt(), gMeme.lines[gMeme.selectedLineIdx].textColor, gMeme.lines[gMeme.selectedLineIdx].textBorderColor)
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

function onSaveMeme(){
    saveMeme()
}

function onClickRandMeme() {
    randomMeme()
    hideGallery()
    renderMeme()
}