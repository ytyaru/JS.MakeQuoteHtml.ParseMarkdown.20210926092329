function parseMarkdown(url = '/content.md', selector = 'body', title_format = null, is_log = false) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        window["markdown"].ready.then(markdown => {
            html_txt = markdown.parse(data)
            document.querySelector(selector).innerHTML = html_txt
            if (is_log) { console.log(html_txt) }
            if (title_format != null) {
                h1 = document.querySelector(`${selector} h1`)
                title = title_format.replace(/{{h1}}/g, h1.textContent)
                document.querySelector('title').innerHTML = title
                if (is_log) { console.log(`タイトルを置換しました：${title}`) }
            }
        })
    });
}

