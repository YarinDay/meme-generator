'use strict'


function renderMeme() {
    let meme = getMeme()
    const img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        gCtx.font=`${gMeme.lines[0].size}px Comic Sans MS`;
        gCtx.fillStyle = gTextColor;
        gCtx.textAlign = `center`;
        gCtx.fillText(meme.lines[0].txt, img.width/2, 40);
        gCtx.fillText(`Hello World`, img.width/2, img.height-30);
    };
    gElCanvas.height = img.height
    gElCanvas.width = img.width

}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}

function getTextBorderColor(elColor) {
    setTextBorderColor(elColor)
}

function getTextColor(elColor) {
    setTextColor(elColor)
}

function onIncreaseFont(){
    increaseFont()
    renderMeme()
}

function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}

function onSwitchLine(){
    switchLine()
    renderMeme()
}

function setLineTxt() {
    let userText = document.querySelector('.user-text').value
    gMeme.lines[0].txt = userText
    renderMeme()
}