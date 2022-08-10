'use strict'

var gElCanvas;
var gCtx;

function init() {
    gElCanvas = document.getElementById('my-canvas')
    console.log('gElCanvas', gElCanvas);
    gCtx = gElCanvas.getContext('2d')
    console.log('ctx', gCtx);
    renderGallery()
    renderMeme()
    console.log(getMeme(gMeme))
}


function hideGallery(){
    document.querySelector('.title').style.visibility= 'visible';
    document.querySelector('.my-canvas').style.visibility= 'visible';
    document.querySelector('.img-editor').style.visibility= 'visible';
    // document.querySelector('.img-container').style.visibility= 'hidden';
}