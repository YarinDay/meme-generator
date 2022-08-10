'use strict'

function renderGallery(){
    let elImgContainer = document.querySelector('.img-container')
    let strHTML = ``
    gImgs.forEach(img=>{
        strHTML += `<img onClick="onImgSelect(${img.id})" src="img/${img.id}.jpg"/>`
    })
    elImgContainer.innerHTML = strHTML
}