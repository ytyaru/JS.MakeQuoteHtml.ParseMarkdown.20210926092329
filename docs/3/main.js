window.addEventListener('load', (event) => {
    setupToast();
//    copyQuote();
    copyQuote(
        dom_sel = 'body', 
        onNotification=()=>{iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});});
    parseMarkdown();
});

