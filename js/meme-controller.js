'use strict'

function renderMeme() {
    const meme = getMeme()
    drawImg(meme)
}

function drawImg(meme) {
    const img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        meme.lines.map((line, idx) => drawText(meme, line.txt, idx))
    }
}

function drawRect(x, y) {
    gCtx.beginPath();
    gCtx.rect(x, y, gElCanvas.width, 50);
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath();
}

function drawText(meme, txt, idx) {
    gCtx.font = `${meme.lines[idx].size}px Comic Sans MS`;
    gCtx.fillStyle = meme.lines[idx].textColor;
    gCtx.strokeStyle = meme.lines[idx].textBorderColor;
    gCtx.textAlign = meme.lines[idx].align;
    let textWidth = gCtx.measureText(txt).width;
    let lineHeight = meme.lines[idx].size * 1.3;
    gCtx.textBaseline = 'top';
    if (idx === 0) {
        gCtx.fillText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
        gCtx.strokeText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
    }
    else if (idx === 1) {
        gCtx.fillText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
        gCtx.strokeText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
    }
    else {
        gCtx.fillText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
        gCtx.strokeText(txt, meme.lines[idx].pos.x, meme.lines[idx].pos.y);
    }
    if (meme.selectedLineIdx === idx) {
        gCtx.strokeStyle = '#121212';
        gCtx.strokeRect(meme.lines[idx].pos.x, meme.lines[idx].pos.y, textWidth, lineHeight);
    }
}

function onClickCanvas(ev) {
    console.log(ev);
}

function onImgSelect(imgId) {
    hideGallery()
    setImg(imgId)
    renderMeme()
}

function onSavedImgSelect(imgId, idx) {
    hideGallery()
    setImg(imgId)
    console.log('What is it?', gSavedMemes[idx]);
    gMeme = gSavedMemes[idx]
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
    document.querySelector('.border-color').value = gMeme.lines[gMeme.selectedLineIdx].textBorderColor
    renderMeme()
}

function onMoveLineUp() {
    moveLineUp()
    renderMeme()
}

function onMoveLineDown() {
    moveLineDown()
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

function onSaveMeme() {
    saveMeme()
}

function onClickRandMeme() {
    randomMeme()
    hideGallery()
    renderMeme()
}