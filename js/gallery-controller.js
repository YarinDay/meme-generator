'use strict'

function renderGallery() {
    let elImgContainer = document.querySelector('.img-container')
    const strHTML = gImgs.map(img => {
        return `<img class="img" onclick="onImgSelect(${img.id})" src="img/${img.id}.jpg"/>`
    })
    elImgContainer.innerHTML = strHTML.join('')
}

function renderSavedMemes() {
    if(!gSavedMemes || !gSavedMemes.length) return
    gSavedMemes = loadFromStorage(KEY)
    let count = -1
    let elImgContainer = document.querySelector('.saved-img-container')
    const strHTML = gSavedMemes.map(savedImg => {
        count++
        return `<img class="img" onclick="onSavedImgSelect(${savedImg.selectedImgId}, ${count})" src="img/${savedImg.selectedImgId}.jpg"/>`
    })
    elImgContainer.innerHTML = strHTML.join('')
}