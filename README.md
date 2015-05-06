# gitbook-plugin-cdc-tema

Plugin para o Gitbook que contém estilos e templates para geração de livros.

## Estilos

### Estilos para site
* [`book/book.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/book/book.css): estilos do site
* [`book/hljs.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/book/hljs.css): contém estilos de _syntax highlighting_ compatíveis com a biblioteca [highlight.js]( https://github.com/isagalaev/highlight.js), usados na geração de site


### Estilos para ebook
* [`ebook/ebook.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/ebook/ebook.css): contém estilos comuns usados em todos os formatos de ebook (pdf, mobi e epub)
* [`ebook/pdf.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/ebook/pdf.css): estilos específicos para pdf
* [`ebook/reader.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/ebook/reader.css): estilos para mobi e epub
* [`ebook/hljs.css`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/ebook/hljs.css): contém estilos de _syntax highlighting_ compatíveis com a biblioteca [highlight.js]( https://github.com/isagalaev/highlight.js), usados em todos os formatos de ebook

## Templates

Os templates utilizados são compatíveis com a _template engine_ [swig](http://paularmstrong.github.io/swig/) do Node.js.

### Templates para site
* [`book/templates/gitbook/page.html`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/book/templates/gitbook/page.html): template usado em cada página do site.
* [`book/templates/gitbook/glossary.html`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/book/templates/gitbook/glossary.html): template para a [página de glossário](https://github.com/GitbookIO/gitbook#glossary) gerada pelo Gitbook. _Usado raramente_.
* [`book/templates/gitbook/langs.html`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/book/templates/gitbook/langs.html): template para a [página de seleção de idiomas](https://github.com/GitbookIO/gitbook#multi-languages) gerada pelo Gitbook. _Usado raramente_.

### Templates para ebook
* [`ebook/templates/gitbook/summary.html`](https://github.com/casadocodigo/gitbook-plugin-cdc-tema/blob/master/theme/ebook/templates/gitbook/summary.html): template para o sumário de ebooks gerados nos formatos mobi e epub.
