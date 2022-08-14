'use strict'

const KEY = 'memesDB'
const gImgs = [
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
const randomWords = ['Dont look up!', 'What are you doing?', 'thats really funny bro',
    'what do you mean?', 'Thats what she said', 'And then she said', 'Not gonna happen',
    'You think you are funny?', 'Ok thats funny', 'SMORT', 'Yea, but why?',
    'stop it!!', 'Lets dance!', 'Politic?', 'Yes', 'No']

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'left',
            textColor: '#FFFFFF',
            textBorderColor: '#121212',
            isFocused: true,
            pos: {
                x: 0,
                y: 40
            }
        }
    ]
}
let gSavedMemes = []

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
    } else meme.lines[meme.lines.length - 1].isFocused = false
}

function addLine(txt, textColor, textBorderColor) {
    if (!txt) return
    const ElCanvas = getElCanvas()
    gMeme.lines.push({
        txt,
        size: 30,
        align: 'left',
        textColor,
        textBorderColor,
        isFocused: true,
        pos: {
            x: ElCanvas.width / 2,
            y: ElCanvas.height / 2
        }
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    if (gMeme.selectedLineIdx === 1) {
        gMeme.lines[gMeme.selectedLineIdx].pos.y = ElCanvas.height - 40
    }
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function moveLineUp() {
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y < 0) return
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 3
}

function moveLineDown() {
    const ElCanvas = getElCanvas()
    console.log(gMeme.lines[gMeme.selectedLineIdx].pos.y);
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y > ElCanvas.height - 35) return
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 3
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    const img = new Image();
    img.src = `img/${gMeme.selectedImgId}.jpg`;
    getElCanvas().height = img.height
    getElCanvas().width = img.width
}

function textAlignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 0
}

function textAlignCenter() {
    // gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    gMeme.lines[gMeme.selectedLineIdx].pos.x = getElCanvas().width / 2

}

function textAlignRight() {
    // gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    gMeme.lines[gMeme.selectedLineIdx].pos.x = getElCanvas().width - getElCtx().measureText(gMeme.lines[gMeme.selectedLineIdx].txt).width

}

function resetMeme() {
    gMeme = {
        selectedImgId: 2,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 30,
                align: 'left',
                textColor: '#FFFFFF',
                textBorderColor: '#121212',
                isFocused: true,
                pos: {
                    x: getElCanvas().width / 2,
                    y: 40
                }
            }
        ]
    }
}

function randomMeme() {
    const randNum = getRandomInt(1, gImgs.length + 1)
    const randLines = getRandomInt(1, 3)
    if (randLines === 1) {
        gMeme.lines[0].txt = randomWords[getRandomInt(0, randomWords.length)]
        gMeme.lines[0].textColor = getRandomColor()
        gMeme.lines[0].textBorderColor = getRandomColor()
        gMeme.lines[0].size = getRandomInt(15, 41)
    } else {
        gMemeTwoLines()
        gMeme.lines[0].txt = randomWords[getRandomInt(0, randomWords.length)]
        gMeme.lines[1].txt = randomWords[getRandomInt(0, randomWords.length)]
        gMeme.lines[0].textColor = getRandomColor()
        gMeme.lines[1].textColor = getRandomColor()
        gMeme.lines[0].textBorderColor = getRandomColor()
        gMeme.lines[1].textBorderColor = getRandomColor()
        gMeme.lines[0].size = getRandomInt(15, 41)
        gMeme.lines[1].size = getRandomInt(15, 41)
    }
    setImg(randNum)
}

function gMemeTwoLines() {
    gMeme = {
        selectedImgId: 2,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 30,
                align: 'left',
                textColor: '#FFFFFF',
                textBorderColor: '#121212',
                isFocused: true,
                pos: {
                    x: getElCanvas().width / 2,
                    y: 40
                }
            },
            {
                txt: '',
                size: 30,
                align: 'left',
                textColor: '#FFFFFF',
                textBorderColor: '#121212',
                isFocused: true,
                pos: {
                    x: getElCanvas().width / 2,
                    y: getElCanvas().height - 40
                }
            }
        ]
    }
}

function setTextBorderColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].textBorderColor = color
}

function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].textColor = color
}

function saveMeme() {
    gSavedMemes.unshift(gMeme)
    _saveMemesToStorage()
}

function _saveMemesToStorage() {
    saveToStorage(KEY, gSavedMemes)
}

function savedMemes() {
    var meme = loadFromStorage(KEY)
    return meme
}