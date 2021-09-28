window.addEventListener('load', (event) => {
    setupToast();
    copyQuote(
        dom_sel = 'body', 
        onNotification=()=>{
            iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
        }
    );
    parseMarkdown(md_url='/JS.MakeQuoteHtml.ParseMarkdown.20210926092329/content.md');
});

