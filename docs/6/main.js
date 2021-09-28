window.addEventListener('load', (event) => {
    setupToast();
    selector = 'main'
    quoter(
        selector = selector, 
        onCopy = () => {
            iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
        }
    );
    parseMarkdown(
        url='/JS.MakeQuoteHtml.ParseMarkdown.20210926092329/content.md',
        selector = selector,
        onParse = (html_txt) => { replaceTilte(selector, '{{h1}} | ytyaru'); }
    );
});

