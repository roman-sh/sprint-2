

function searchByKeywords(keywordsStr) {
    var keywords = keywordsStr.split(',');

    keywords = keywords.map(function(keyword) {
        keyword = keyword.trim();
        return keyword.toLowerCase();
    });

    var filteredImgs = filterByKeywords(keywords);
    gState.currImgsToRender = filteredImgs;
    gState.prevMaxImgPerRow = undefined;
    renderImgSelect(gState.currImgsToRender);
}

function filterByKeywords(keywords) {
    // var keywords = Array.prototype.slice.call(arguments, 0);

    var filteredImgs = gImgs.filter(function(img) {
      return keywords.some(function(keyword) {
        return img.keywords.includes(keyword);
      }); 
    });
    
    return filteredImgs;
}

function renderKeywords() {
    var keywordsTally = getKeywordsTally();

    var elKeywordsBox = document.querySelector('.keywords-container');
    var htmlStr = getKeywordsHtml(keywordsTally);

    elKeywordsBox.innerHTML = htmlStr;
}


function getKeywordsTally() {
    var keywordsTally = {};

    gImgs.forEach(function(img) {
        img.keywords.forEach(function(keyword) {
            
            if (keywordsTally[keyword]) keywordsTally[keyword]++;
            else keywordsTally[keyword] = 1;

        });
    });

    return keywordsTally;
}

function getKeywordsHtml(keywordsTally) {
    var keywordsHtml = '<ul class="clean-list flex flex-wrap keywords-list">';
    for (var keyword in keywordsTally) {

        keywordsHtml += `<li><button onclick="searchByKeywords('${keyword}')" style="font-size: ${10 * keywordsTally[keyword]}px">` +
                        `${keyword}</button></li>`;

    }
    keywordsHtml += '</ul>';

    return keywordsHtml;
}

function searchIfEnter(ev, textInput) {
    if (ev.code === 'Enter') {
        searchByKeywords(textInput.value);
        textInput.value = '';
        textInput.blur();
    }
}