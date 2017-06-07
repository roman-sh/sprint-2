var gImgs = [];

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
    renderImgSelect(gImgs);
    el.addEventListener('resize', function() {
        renderImgSelect(gImgs);
    });
}
