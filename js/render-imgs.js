'use strict';

var BREAK_POINT = 520; // the width of the viewport for media query that doubles the img size.

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

    var htmlStr = getImgSelectHtml(imgs, rowMargin, maxImgPerRow);

    document.querySelector('.img-select').innerHTML = htmlStr;
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
