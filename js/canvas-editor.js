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

function changeColor(color,txtIdx) {
    gState.txts[txtIdx].color = color;
    renderCanvas();
}

function changeFont(font,txtIdx) {
    gState.txts[txtIdx].font = font;
    renderCanvas();
}
