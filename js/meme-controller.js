'use strict'


function renderMeme() {
    const meme = getMeme()
    const img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        gCtx.font = `${meme.lines[meme.selectedLineIdx].size}px Comic Sans MS`;
        gCtx.fillStyle = meme.lines[meme.selectedLineIdx].textColor;
        gCtx.textAlign = meme.lines[meme.selectedLineIdx].align;
        if (meme.selectedLineIdx === 0) {
            gCtx.fillText(meme.lines[meme.selectedLineIdx].txt, img.width / 2, 40);
        }
        else if (meme.selectedLineIdx === 1) {
            gCtx.fillText(meme.lines[meme.selectedLineIdx].txt, img.width / 2, img.height - 30);
        }
        else gCtx.fillText(meme.lines[meme.selectedLineIdx].txt, img.width / 2, img.height / 2);

    };
    gElCanvas.height = img.height
    gElCanvas.width = img.width
    console.log(gMeme);

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
    let userText = document.querySelector('.user-text').value
    gMeme.lines[gMeme.selectedLineIdx].txt = userText
    renderMeme()
}