'use strict';

var BREAK_POINT = 600; // the width of the viewport for media query that doubles the img size.
var gPrevMaxImgPerRow;
var testCount = 0;


// TODO: change name to renderImgSelection
function renderImgSelect(imgs) {
    var elHexaWidth = 100; // includes the side margins
    var rowMargin = 19;
    var viewportW = document.body.clientWidth;
    if (viewportW > BREAK_POINT) {
        elHexaWidth *= 2;
        rowMargin *= 2;
    }
    var maxImgPerRow = Math.floor(viewportW / elHexaWidth);
    if (maxImgPerRow === gPrevMaxImgPerRow) return;
    gPrevMaxImgPerRow = maxImgPerRow;

    var htmlStr = getImgSelectHtml(imgs, rowMargin, maxImgPerRow);

    var elImgSelect = document.querySelector('.img-select');
    elImgSelect.innerHTML = htmlStr;
    centerElImgs(elImgSelect.querySelectorAll('img'));
    console.log(++testCount);
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
                        <img src="${imgs[i].url}">
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