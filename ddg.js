// javascript:javascript:%20ddg();function%20ddg()%20{var%20e%20=%20encodeURIComponent;var%20t%20=%20window.getSelection%20?%20window.getSelection()%20:%20(document.getSelection%20?%20document.getSelection()%20:%20(document.selection%20?%20document.selection.createRange().text%20:%20%27%27));if%20(t%20==%20%27%27)%20{var%20defText%20=%20%27!%27;}%20else%20{var%20defText%20=%20t;}var%20c%20=%20window.prompt(%27Search%20on%20DuckDuckGo%27,%20defText);if%20(c)%20{window.location%20=%20%27https://duckduckgo.com/?q=%27%20+%20e(c);}}

javascript: ddg();

function ddg() {
    var e = encodeURIComponent;
    var t = window.getSelection ? window.getSelection() : (document.getSelection ? document.getSelection() : (document.selection ? document.selection.createRange().text : ''));

    if (t == '') {
        var defText = '!';
    } else {
        var defText = t;
    }

    var c = window.prompt('Search on DuckDuckGo', defText);

    if (c) {
        window.location = 'https://duckduckgo.com/?q=' + e(c);
    }

}
