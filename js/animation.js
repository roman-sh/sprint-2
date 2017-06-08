// meme-img hexa
var gShouldAnimate = true;

function animateOut() {
    var elDivImgs = document.querySelectorAll('.meme-img');
    elDivImgs.forEach(function(elDivImg) {
        // elDivImg.classList.add('animated');
        var direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0:
               elDivImg.classList.add('animated','zoomOutUp');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomOutUp');
               },1500);
               break;
            case 1:
               elDivImg.classList.add('animated','zoomOutRight');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomOutRight');
               },1500);
               break;
            case 2:
               elDivImg.classList.add('animated','zoomOutDown');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomOutDown');
               },1500);
               break;
            case 3:
               elDivImg.classList.add('animated','zoomOutLeft');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomOutLeft');
               },1500);
               break;
        }
    })
}

function animateIn() {
    var elDivImgs = document.querySelectorAll('.meme-img');
    elDivImgs.forEach(function(elDivImg) {
        // elDivImg.classList.add('animated');
        var direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0:
               elDivImg.classList.add('animated','zoomInUp');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomInUp');
               },1500);
               break;
            case 1:
               elDivImg.classList.add('animated','zoomInRight');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomInRight');
               },1500);
               break;
            case 2:
               elDivImg.classList.add('animated','zoomInDown');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomInDown');
               },1500);
               break;
            case 3:
               elDivImg.classList.add('animated','zoomInLeft');
               setTimeout(function() {
                   elDivImg.classList.remove('animated','zoomInLeft');
               },1500);
               break;
        }
    })
}

function animateCanvas() {
    elGenSection = document.querySelector('.meme-generator');
    elGenSection.classList.add('animated','flipInX');
    setTimeout(function() {
        elGenSection.classList.remove('animated','flipInX');
    },1000);
}

        // var elGenSection = document.querySelector('.meme-generator');
