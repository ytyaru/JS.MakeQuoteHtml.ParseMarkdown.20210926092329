function replaceTilte(selector='body', format='{{h1}}', is_log = false) {
    h1 = document.querySelector(`${selector} h1`)
    title = format.replace(/{{h1}}/g, h1.textContent)
    document.querySelector('title').innerHTML = title
    if (is_log) { console.log(`タイトルを置換しました：${title}`) }
}

