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
    
    window.location = 'https://duckduckgo.com/?q=' + c;
    
}


/*
javascript:ddg();function ddg(){var e=encodeURIComponent;var t=window.getSelection?window.getSelection():(document.getSelection?document.getSelection():(document.selection?document.selection.createRange().text:''));if(t==''){var defText='!';}else{var defText=t;}var c=window.prompt('Search on DuckDuckGo',defText);window.location='https://duckduckgo.com/?q='+c;}
created with:
http://www.subsimple.com/bookmarklets/jsbuilder.htm
*/