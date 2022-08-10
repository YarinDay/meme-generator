'use strict'


function renderMeme(meme) {
    const img = new Image();
    img.src = 'img/yarin.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        gCtx.font="30px Comic Sans MS";
        gCtx.fillStyle = "red";
        gCtx.textAlign = "center";
        gCtx.fillText("Hello World", img.width/2, 30);
        gCtx.fillText("Hello World", img.width/2, img.height/2);
        gCtx.fillText("Hello World", img.width/2, img.height-30);
    };
    gElCanvas.height = img.height
    gElCanvas.width = img.width

}