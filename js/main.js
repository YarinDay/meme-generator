'use strict'

var gElCanvas;
var gCtx;

function init() {
    gElCanvas = document.getElementById('my-canvas')
    console.log('gElCanvas', gElCanvas);
    gCtx = gElCanvas.getContext('2d')
    console.log('ctx', gCtx);
    renderMeme()

}