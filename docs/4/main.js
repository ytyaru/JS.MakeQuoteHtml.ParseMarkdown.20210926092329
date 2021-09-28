window.addEventListener('load', (event) => {
    setupToast();
    quoter(
        selector = 'main', 
        onCopy = () => {
            iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
        }
    );
    parseMarkdown(
        url='/JS.MakeQuoteHtml.ParseMarkdown.20210926092329/content.md',
        selector='main'
    );
});

