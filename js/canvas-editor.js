'use strict';

function fontSizeClicked(incORdec,txtIdx) {
    if (incORdec === '+')   gState.txts[txtIdx].size += 2;
    else                    gState.txts[txtIdx].size -= 2;
    renderCanvas();
}

function updateText(text,txtIdx) {
    gState.txts[txtIdx].text = text;
    renderCanvas();
}

function changeTextColor(color,txtIdx) {
    gState.txts[txtIdx].color = color;
    renderCanvas();
}

function changeFont(font,txtIdx) {
    gState.txts[txtIdx].font = font;
    renderCanvas();
}

function changeStrokeColor(color,txtIdx) {
    gState.txts[txtIdx].strokeColor = color;
    renderCanvas();
}

function moveText(direction,txtIdx) {
    switch (direction) {
        case 'up':
            gState.txts[txtIdx].y -= 5;
            break;
        case 'down':
            gState.txts[txtIdx].y += 5;
            break;
        case 'left':
            gState.txts[txtIdx].x -= 5;
            break;
         case 'right':
            gState.txts[txtIdx].x += 5;
            break;
    }
    renderCanvas();
}