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
                        else { onNotification(); }
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
    setupCopy();
}
