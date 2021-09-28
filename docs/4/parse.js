function parseMarkdown(url = '/content.md', selector = 'body', is_log = false) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        window["markdown"].ready.then(markdown => {
            html_txt = markdown.parse(data)
            document.querySelector(dom_sel).innerHTML = html_txt
            if (is_log) { console.log(html_txt) }
        })
    });
}

