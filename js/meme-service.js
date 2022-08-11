'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'happy'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'happy'] },
    { id: 19, url: 'img/19.jpg', keywords: ['funny', 'happy'] }
];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'center',
            textColor: '#121212',
            isFocused: true
        }
    ]
}
// var gTextBorderColor = '#121212'
// var gTextColor = '#121212'

function getMeme() {
    return gMeme
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 1
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1
}

function switchLine() {
    var meme = getMeme()
    if (meme.selectedLineIdx < meme.lines.length - 1) meme.selectedLineIdx++
    else meme.selectedLineIdx = 0
    if (meme.selectedLineIdx === meme.lines.length - 1) {
        meme.lines[meme.lines.length - 1].isFocused = true
    } else {
        meme.lines[meme.lines.length - 1].isFocused = false
    }
    console.log(meme.selectedLineIdx);
}

function drawImg(meme) {
    const img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        meme.lines.map((line, idx) => {
            return drawText(meme, line.txt, idx)
        })
    }
    gElCanvas.height = img.height
    gElCanvas.width = img.width

}

function drawText(meme, txt, idx) {
    gCtx.font = `${meme.lines[idx].size}px Comic Sans MS`;
    // if (meme.lines[meme.selectedLineIdx].isFocused) {
    //     gCtx.fillStyle = 'lightgray';
    //     gCtx.fillRect(0, 0, gElCanvas.width / 2, 40);
    // } else {
    //     gCtx.fillStyle = 'grey';
    //     gCtx.fillRect(0, 0, gElCanvas.width / 2, 40);
    // }

    gCtx.fillStyle = meme.lines[idx].textColor;
    gCtx.strokeStyle = meme.lines[idx].textColor;
    gCtx.textAlign = meme.lines[idx].align;
    if (idx === 0) {
        gCtx.fillText(txt, gElCanvas.width / 2, 40);

    }
    else if (idx === 1) {
        gCtx.fillText(txt, gElCanvas.width / 2, gElCanvas.height - 40);
    }
    else gCtx.fillText(txt, gElCanvas.width / 2, gElCanvas.height / 2);

}

function addLine(txt, textColor) {

    gMeme.lines[gMeme.lines.length] = {
        txt,
        size: 20,
        align: 'center',
        textColor,
        isFocused: true
    }
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    console.log('GMEME', gMeme);
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

// function setTextBorderColor(color) {
//     gTextBorderColor = color
//     renderMeme()
// }

function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].textColor = color
}

// function setImg(meme) {
//     let imgPicked
//     gImgs.forEach(img => {
//         if (img.id === meme.selectedImgId) {
//             imgPicked = img.url
//         }
//     })
//     return imgPicked
// }