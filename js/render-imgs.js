'use strict';

var BREAK_POINT = 600; // the width of the viewport for media query that doubles the img size.
var gPrevMaxImgPerRow;
var testCount = 0;


function renderImgSelect(imgs) {
    if (!gState.shouldRenderImgs) return;
    
    var elHexaWidth = 100; // includes the side margins
    var rowMargin = 19;
    var viewportW = document.body.clientWidth;
    if (viewportW > BREAK_POINT) {
        elHexaWidth *= 2;
        rowMargin *= 2;
    }
    var maxImgPerRow = Math.floor(viewportW / elHexaWidth);

    // if (maxImgPerRow === gPrevMaxImgPerRow) return;
    // gPrevMaxImgPerRow = maxImgPerRow;

    var htmlStr = getImgSelectHtml(imgs, rowMargin, maxImgPerRow);

    var elImgSelect = document.querySelector('.img-select');
    elImgSelect.innerHTML = htmlStr;
    // centerElImgs(elImgSelect.querySelectorAll('img'));

    setTimeout(function() { centerElImgs(elImgSelect.querySelectorAll('img')) }, 50); // TODO: implement a better solution
    console.log(++testCount);
    elImgSelect.classList.remove('hide');
}

function getImgSelectHtml(imgs, rowMargin, maxImgPerRow) {
    var htmlStr = '';
    var rowCount = 0;
    var imgIdx = 0;
    while (imgIdx < imgs.length) {
        htmlStr += `<div class="row flex" style="top: ${rowCount * -rowMargin}px">`;
        var imgPerRow = (rowCount % 2 === 0)? maxImgPerRow - 1 : maxImgPerRow;
        var limit = imgIdx + imgPerRow;
        for (var i = imgIdx; i < limit && i < imgs.length; i++) {
            htmlStr += `<div class="meme-img hexa">
                        <img src="${imgs[i].url}" onClick="memeImgClicked(${gImgs[i].id})">
                        </div>`;
        }
        htmlStr += '</div>';
        imgIdx = i;
        rowCount++
    }
    return htmlStr;
}

function centerElImgs(elImgs) {
    elImgs.forEach(function(elImg) {
        var atrrValue = `right: calc(50% - ${elImg.width / 2}px)`;
        elImg.setAttribute('style', atrrValue);
    });
}