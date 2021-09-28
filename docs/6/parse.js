function parseMarkdown(url = '/content.md', selector = 'body', onParse = null) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        window["markdown"].ready.then(markdown => {
            html_txt = markdown.parse(data)
            document.querySelector(selector).innerHTML = html_txt
            if (null != onParse) { onParse(html_txt); }
        })
    });
}

