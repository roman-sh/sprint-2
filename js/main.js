var CANVAS_BOX_SELECTOR = '.canvas-container';

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

createImgObj(1, 'assets/img/img1.jpg', ['crying']);
createImgObj(2, 'assets/img/img2.jpg', ['cheers']);
createImgObj(3, 'assets/img/img3.jpg', ['smiling']);
createImgObj(4, 'assets/img/img4.jpg', ['worried']);
createImgObj(5, 'assets/img/img5.jpg', ['funny']);
createImgObj(6, 'assets/img/img6.jpg', ['baby']);
createImgObj(7, 'assets/img/img7.jpg', ['obama']);
createImgObj(8, 'assets/img/img8.jpg', ['girl']);
createImgObj(9, 'assets/img/img9.jpg', ['think']);
createImgObj(10, 'assets/img/img10.jpg', ['kittie']);
createImgObj(11, 'assets/img/img11.jpg', ['cat']);
createImgObj(12, 'assets/img/img12.jpg', ['dog','happy']);
createImgObj(13, 'assets/img/img13.jpg', ['dog','white']);

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
        ],
        shouldRenderImgs: true
    }
    return gState;
}


function renderCanvas() {
    var elCanvas = document.createElement('canvas');
    
    var img = gImgs.find(function(img) { return img.id === gState.selectedImgId ;})
    var elImg = new Image;
    elImg.src = img.url;

    elCanvas.setAttribute('width', elImg.width);
    elCanvas.setAttribute('height', elImg.height);
    
    var context = elCanvas.getContext('2d');
    context.clearRect(0, 0, elCanvas.width, elCanvas.height);
    context.drawImage(elImg, 0, 0);

    renderCanvasTxts(context);

    var elCanvasBox = document.querySelector(CANVAS_BOX_SELECTOR);
    elCanvasBox.innerHTML = '';
    elCanvasBox.appendChild(elCanvas);

    elCanvasBox.parentNode.classList.remove('hide');
}

function renderCanvasTxts(context) {
    gState.txts.forEach(function(txt, i) {

        context.fillStyle = txt.color;
        context.font = txt.size + 'px ' + txt.font;
        context.fillText(txt.text, 20, 20*(i+1));

    })
}

function memeImgClicked(imgId) {
    gState.shouldRenderImgs = false;
    gState.selectedImgId = imgId;
    renderCanvas();

    var elImgSelect = document.querySelector('.img-select');
    elImgSelect.classList.add('hide');

}

function backToImgSelect(el) {
    el.parentNode.classList.add('hide');
    
    gState.shouldRenderImgs = true;
    renderImgSelect(gImgs);
}