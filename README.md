[ja](./README.ja.md)

# MakeQuoteHtml.ParseMarkdown

Generate quoted HTML from the selected text and copy it to the clipboard. The text is created by parsing an external file in Markdown format.

# DEMO

* [DEMO](https://ytyaru.github.io/JS.MakeQuoteHtml.ParseMarkdown.20210926092329/)

# Features

* Reprint (plagiarism) decreases, citations (introduction) increase
* Independent of external libraries

# Requirement

* <time datetime="2021-09-26T09:23:24+0900">2021-09-26</time>
* [Raspbierry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 4 Model B Rev 1.2
* [Raspberry Pi OS](https://ja.wikipedia.org/wiki/Raspbian) buster 10.0 2020-08-20 <small>[setup](http://ytyaru.hatenablog.com/entry/2020/10/06/111111)</small>
* bash 5.0.3(1)-release
* Chromium 88.0.4324.187

```sh
$ uname -a
Linux raspberrypi 5.10.52-v7l+ #1441 SMP Tue Aug 3 18:11:56 BST 2021 armv7l GNU/Linux
```

# Installation

```sh
git clone https://github.com/ytyaru/JS.MakeQuoteHtml.ParseMarkdown.20210926092329
```

# Usage

1. Start the terminal
    1. Move the current directory. To the path where index.html is. `cd JS.MakeQuoteHtml.ParseMarkdown.20210926092329 / src`
    2. `python3 -m http.server 8000`
2. Launch your browser
    1. Enter `http://0.0.0.0:8000/` in the URL field

# Note

* Clipboard API does not work unless it is https (the above local server is http, so it does not work)
    * `Uncaught TypeError: Cannot read property 'writeText' of undefined at HTMLBodyElement.<anonymous> (copy.js:6)`
* [DEMO][] uses an external library (notification, Markdown parser)

# Author

ytyaru

* [![github](http://www.google.com/s2/favicons?domain=github.com)](https://github.com/ytyaru "github")
* [![hatena](http://www.google.com/s2/favicons?domain=www.hatena.ne.jp)](http://ytyaru.hatenablog.com/ytyaru "hatena")
* [![mastodon](http://www.google.com/s2/favicons?domain=mstdn.jp)](https://mstdn.jp/web/accounts/233143 "mastdon")

# License

This software is CC0 licensed.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.en)

Used libraries.

* [marcelodolza/iziToast](https://github.com/marcelodolza/iziToast)
* [rsms/markdown-wasm](https://github.com/rsms/markdown-wasm)

