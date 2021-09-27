function copyQuote(dom_sel = 'body', onNotification = null) {
    function makeBlockquoteString() {
        return `<blockquote cite="${location.href}">
<p>${window.getSelection().toString()}</p>
引用元：<cite><a href="${location.href}">${document.title}</a></cite>
</blockquote>`
    }
    function setupCopy() {
        target = document.querySelector(dom_sel);
        target.addEventListener('selectstart', function(){
            target.addEventListener('mouseup', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        if (onNotification == null) { alert('引用HTMLをコピーしました'); }
                        else { console.log('onNotification != null'); onNotification(); }
                    });
                }
            });
            target.addEventListener('touchend', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        if (onNotification == null) { alert('引用HTMLをコピーしました'); }
                        else { onNotification(); }
                    });
                }
            });
        });
    }
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

}
