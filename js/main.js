'use strict'

let gElCanvas;
let gCtx;

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderSavedMemes()
    renderMeme()
}

function getElCanvas(){
    return gElCanvas
}

function getElCtx(){
    return gCtx
}

function hideGallery() {
    document.querySelector('.title').style.display = 'block';
    document.querySelector('.canvas-container').style.display = 'flex';
    document.querySelector('.img-editor').style.display = 'flex';
    document.querySelector('.img-container').style.display = 'none';
    document.querySelector('.saved-img-container').style.display = 'none';
    document.querySelector('.rand-img').style.display = 'none';
    document.querySelector('.team-member').style.display = 'block';
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-image.jpg'
}

function backToGallery() {
    resetMeme()
    document.body.classList.toggle('menu-opened')
    document.querySelector('.user-text').value= ''
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.img-editor').style.display = 'none';
    document.querySelector('.img-container').style.display = 'grid';
    document.querySelector('.saved-img-container').style.display = 'none';
    document.querySelector('.rand-img').style.display = 'flex';
    document.querySelector('.team-member').style.display = 'block';

}

function onSavedMemes(){
    document.body.classList.toggle('menu-opened')
    gSavedMemes = savedMemes()
    renderSavedMemes()
    document.querySelector('.user-text').value= ''
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.img-editor').style.display = 'none';
    document.querySelector('.img-container').style.display = 'none';
    document.querySelector('.saved-img-container').style.display = 'grid';
    document.querySelector('.rand-img').style.display = 'none';
    document.querySelector('.team-member').style.display = 'none';
}

function toggleNav() {
    document.body.classList.toggle('menu-opened')
}