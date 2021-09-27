window.addEventListener('load', (event) => {
    setupToast();
    copyQuote(
        dom_sel = 'body', 
        onNotification=function(){
            console.log('引用HTMLをコピーしました');
            iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
        }
    );
    parseMarkdown(md_url='/JS.MakeQuoteHtml.ParseMarkdown.20210926092329/3/index.md');
});

