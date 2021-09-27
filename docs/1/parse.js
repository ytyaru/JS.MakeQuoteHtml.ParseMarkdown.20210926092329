function parseMarkdown(md_url = '/index.md', dom_sel = 'body', is_log = false) {
    fetch(md_url)
    .then(response => response.text())
    .then(data => {
        window["markdown"].ready.then(markdown => {
            md = markdown.parse(data)
            document.querySelector(dom_sel).innerHTML = md
            if (is_log) { console.log(md) }
        })
    });
}

