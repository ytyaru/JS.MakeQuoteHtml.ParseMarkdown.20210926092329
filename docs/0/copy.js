function setupCopy() {
    target = document.querySelector("body");
    target.addEventListener('selectstart', function(){
        target.addEventListener('mouseup', function(event) {
            if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                    iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
                });
            }
        });
        target.addEventListener('touchend', function(event) {
            if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                    iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
                });
            }
        });
    });
}

