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

createImgObj(1, 'assets/img/img1.jpg', ['crying', 'sad', 'jordan', 'man', 'basketball', 'emotional', 'closeup', 'cute']);
createImgObj(2, 'assets/img/img2.jpg', ['cheers', 'celebrate', 'dicaprio', 'kudos', 'smug', 'rich', 'fancy', 'a toast', 'smiling', 'smirk']);
createImgObj(3, 'assets/img/img3.jpg', ['smiling', 'tell me more', 'willy wonka', 'wonka', 'interested', 'fake interest', 'sarcastic', 'sarcasm']);
createImgObj(4, 'assets/img/img4.jpg', ['worried', 'incredulous', 'confused', 'bewildered', 'doubtful', 'mildly shocked', 'hand gesture']);
createImgObj(5, 'assets/img/img5.jpg', ['funny', 'ken', 'red sweater', 'red shirt', 'debate', 'cuddly', 'mustache', 'glasses', 'microphone', 'nice', 'cute']);
createImgObj(6, 'assets/img/img6.jpg', ['sarcastic', 'sarcasm', 'nicholas cage', 'cage', 'fake excitment', 'madness', 'crazy']);
createImgObj(7, 'assets/img/img7.jpg', ['think', 'cool', 'smug', 'educate', 'mustache', 'bling', 'leather', 'pleased', 'closeup', 'hand gesture', 'smiling', 'smirk']);
createImgObj(8, 'assets/img/img8.jpg', ['obama', 'president', 'firm', 'pointing', 'assertive', 'you', 'fierce', 'determined', 'punish', 'accuse', 'angry', 'hand gesture']);
createImgObj(9, 'assets/img/img9.jpg', ['girl', 'guilty', 'psychopath', 'pleased', 'fire', 'fireman', 'firetruck', 'brat', 'mona lisa smile', 'smiling']);
createImgObj(10, 'assets/img/img10.jpg', ['kittie', 'kitten', 'cat', 'scared', 'worried', 'confused', 'mildly shocked', 'cute']);
createImgObj(11, 'assets/img/img11.jpg', ['cat', 'bored', 'resting', 'daydreamimg', ,'ginger', 'cute']);
createImgObj(12, 'assets/img/img12.jpg', ['cat','serious', 'angry', 'closeup', 'smarter than you']);
createImgObj(13, 'assets/img/img13.jpg', ['cat', 'kitten', 'kittie', 'cute', 'scared', 'worried', 'hiding', 'shocked', 'witness']);

function init(el) {
    gState = getInitGState();
    renderImgSelect(gImgs);
    el.addEventListener('resize', function() {
        renderImgSelect(gState.currImgsToRender);
    });
    renderKeywords();
}

function getInitGState() {
    gState = {
        selectedImgId: 4,
        txts: [
            {
                text: 'I like your style',
                size: 50,
                font: 'Lato',
                align: 'center',
                color: 'hotpink',
                strokeColor: 'transparent',
                x: 52,
                y: 55
            },
            {
                text: 'But you suck',
                size: 50,
                font: 'monospace',
                align: 'center',
                color: 'tomato',
                strokeColor: 'lightgrey',
                x: 30,
                y: 370
            }
        ],

        currImgsToRender: gImgs,
        shouldRenderImgs: true,
        prevMaxImgPerRow: undefined
    }

    return gState;
}


function renderCanvas() {
    var elCanvas = document.createElement('canvas');
    
    var img = gImgs.find(function(img) { return img.id === gState.selectedImgId ;})
    var elImg = new Image;
    elImg.src = img.url;

    elImg.onload = function() {

        elCanvas.setAttribute('width', elImg.width);
        elCanvas.setAttribute('height', elImg.height);
        
        var context = elCanvas.getContext('2d');
        context.clearRect(0, 0, elCanvas.width, elCanvas.height);
        context.drawImage(elImg, 0, 0);

        renderCanvasTxts(context);

        var elCanvasBox = document.querySelector(CANVAS_BOX_SELECTOR);
        elCanvasBox.innerHTML = '';
        elCanvasBox.appendChild(elCanvas);

        elCanvasBox.parentNode.parentNode.classList.remove('hide'); // feels hacky
    }
}

function renderCanvasTxts(context) {
    gState.txts.forEach(function(txt, i) {

        context.fillStyle = txt.color;
        context.strokeStyle = txt.strokeColor;
        context.font = txt.size + 'px ' + txt.font;
        context.fillText(txt.text, txt.x, txt.y);
        context.strokeText(txt.text, txt.x, txt.y);

    })
}

function memeImgClicked(imgId) {
    animateOut();
    setTimeout(function(){
        gState.shouldRenderImgs = false;
        gState.selectedImgId = imgId;
        renderCanvas();
        animateCanvas();

        var elImgSelect = document.querySelector('.img-select');
        elImgSelect.classList.add('hide');
    },1000)
    
}

function backToImgSelect() {
    elGenerator = document.querySelector('.meme-generator')
    elGenerator.classList.add('hide');
    
    gState.shouldRenderImgs = true;
    gState.prevMaxImgPerRow = undefined;
    gShouldAnimate = true;
    renderImgSelect(gState.currImgsToRender);
}

function gotoCanvasImg() {
    var elCanvas = document.querySelector(CANVAS_BOX_SELECTOR + ' canvas');

    var canvasImg = elCanvas.toDataURL();
    window.location = canvasImg;
}


// TODO: get rid of this
function toggleElementVisibility(el, selector) {
    if (!selector) el.classList.toggle('hide');
    else {
        var elChild = el.querySelector(selector);
        elChild.classList.toggle('hide');
    }
    // if (typeof elOrSelector === String) {
    //     var el = document.querySelector(elOrSelector);
    //     el.classList.toggle('hide');
    // } else {
    //     elOrSelector.classList.toggle('hide');
    // }
}