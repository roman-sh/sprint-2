var gImgs = [];

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
createImgObj(7, 'assets/img/img6.jpg', ['obama']);
createImgObj(8, 'assets/img/img6.jpg', ['girl']);
createImgObj(9, 'assets/img/img6.jpg', ['think']);
createImgObj(10, 'assets/img/img6.jpg', ['kittie']);
createImgObj(11, 'assets/img/img6.jpg', ['cat']);
createImgObj(12, 'assets/img/img6.jpg', ['dog','happy']);
createImgObj(13, 'assets/img/img6.jpg', ['dog','white']);

function init(el) {
    el.addEventListener(resize, renderImgSelect(gImgs));
}
