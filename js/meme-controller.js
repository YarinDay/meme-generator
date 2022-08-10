'use strict'


function renderMeme() {
    let meme = getMeme()
    const img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        gCtx.font="30px Comic Sans MS";
        gCtx.fillStyle = gTextColor;
        gCtx.textAlign = "center";
        gCtx.fillText(meme.lines[0].txt, img.width/2, 30);
        gCtx.fillText("Hello World", img.width/2, img.height/2);
        gCtx.fillText("Hello World", img.width/2, img.height-30);
    };
    gElCanvas.height = img.height
    gElCanvas.width = img.width

}

function getTextBorderColor(elColor) {
    setTextBorderColor(elColor)
}

function getTextColor(elColor) {
    setTextColor(elColor)
}