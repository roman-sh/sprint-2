var CANVAS_SELECTOR = '#meme-canvas';

var gImgs = [];
var gState;

function createImgObj(id, url, keywords) {
    var img = {
    id,
    url,
    keywords
    }
    gImgs.push(img);
}

createImgObj(1, 'assets/img/img1.jpeg', ['crying']);
createImgObj(2, 'assets/img/img2.jpeg', ['cheers']);
createImgObj(3, 'assets/img/img3.jpeg', ['smiling']);
createImgObj(4, 'assets/img/img4.jpeg', ['worried']);
createImgObj(5, 'assets/img/img5.jpeg', ['funny']);
createImgObj(6, 'assets/img/img6.jpeg', ['baby']);
createImgObj(7, 'assets/img/img7.jpeg', ['obama']);
createImgObj(8, 'assets/img/img8.jpeg', ['girl']);
createImgObj(9, 'assets/img/img9.jpeg', ['think']);
createImgObj(10, 'assets/img/img10.jpeg', ['kittie']);
createImgObj(11, 'assets/img/img11.jpeg', ['cat']);
createImgObj(12, 'assets/img/img12.jpeg', ['dog','happy']);
createImgObj(13, 'assets/img/img13.jpeg', ['dog','white']);

function init(el) {
    gState = getInitGState();
    renderImgSelect(gImgs);
    el.addEventListener('resize', function() {
        renderImgSelect(gImgs);
    });
}

function getInitGState() {
    gState = {
        selectedImgId: 4,
        txts: [
            {
                text: 'I like your style',
                size: 18,
                font: 'Lato',
                align: 'center',
                color: 'hotpink'
            },
            {
                text: 'But you suck',
                size: 22,
                font: 'monospace',
                align: 'center',
                color: 'tomato'
            }
        ]
    }
    return gState;
}


function renderCanvas() {
    var elCanvas = document.querySelector(CANVAS_SELECTOR);
    var context = elCanvas.getContext('2d');
    var elImg = document.createElement('img');
    var imgSrc = gImgs[gState.selectedImgId - 1].url;
    elImg.setAttribute('src', imgSrc);

    context.drawImage(elImg, 0, 0);

    renderCanvasTxts(context);
}

function renderCanvasTxts(context) {
    gState.txts.forEach(function(txt, i) {

        context.fillStyle = txt.color;
        context.font = txt.size + 'px ' + txt.font;
        context.fillText(txt.text, 20, 20*(i+1));

    })
}