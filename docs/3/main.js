window.addEventListener('load', (event) => {
    setupToast();
    copyQuote(
        dom_sel = 'body', 
        onNotification=()=>{iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});});
    parseMarkdown(md_url='/3/index.md');
});

