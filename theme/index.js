var fs = require("fs");
var path = require("path");

var style = {
    "pdf": "pdf.css",
    "epub": "reader.css",
    "mobi": "reader.css"
};

module.exports = {
    ebook : function () {
        var extension = obtainExtension(this.options);
        return {
            assets: "./theme/ebook",
            css: [
                "ebook.css",
                style[extension],
                "hljs.css"
            ]
        };
    },
    book : {
        assets: "./theme/book",
        css: [
            "book.css",
            "hljs.css"
        ]
    },
    templates: {
        "ebook:sumary": "./theme/ebook/templates/gitbook/summary.html",
        "site:page": "./theme/book/templates/gitbook/page.html",
        "site:langs": "./theme/book/templates/gitbook/langs.html",
        "site:glossary": "./theme/book/templates/gitbook/glossary.html"
    },
    setOptions: setOptions
};

function obtainExtension(options) {
	var extension = options.extension || path.extname(options.output).replace(".", "");
	if (!extension && options.format === "ebook") {
		extension = "pdf";
	}
	return extension;
}

function setOptions(){
    this.options.maxLineLength = 67;
    pdfOptions.call(this);
}

function pdfOptions(){
    this.options.pdf.customSize = "155x230";

    this.options.pdf.fontSize =  "11";

    this.options.pdf.margin.top =  "62";
    this.options.pdf.margin.bottom = "62";
    this.options.pdf.margin.left =  "62";
    this.options.pdf.margin.right =  "62";

    this.options.pdf.footerTemplate = "<style>#ebook-footer { border-top: 1px solid black; margin-bottom: 72pt; text-transform: uppercase; font-family: Arial, sans-serif; } #footer-content { margin-top: 12pt; } .section { font-weight: normal; color: dimgray; } .pagenum { font-weight: bold; color: black; } .margem { margin-left: 12pt;  }</style> " +
        "<div id='ebook-footer'><div id='footer-content'></div></div>" +
        "<script>var footer = document.getElementById('footer-content'); var page = _PAGENUM_ - 2; if(_PAGENUM_ % 2 != 0){ footer.innerHTML = '<span class=\\'section\\'>_SECTION_</span><span class=\\'pagenum margem\\'>'+page+'</span>'; footer.style.textAlign = 'right'; } else { footer.innerHTML = '<span class=\\'pagenum\\'>'+page+'</span><span class=\\'section margem\\'>_SECTION_</span>'; footer.style.textAlign = 'left'; }</script>";

    this.options.pdf.summary = {
        headerTemplate: "<p id='ebook-header' style='border-bottom: 1px solid black; margin-top: 36pt;'><span class='odd_page'><span>Casa do Código</span><span style='float:right'>Sumário</span></span><span class='even_page'><span>Sumário</span><span style='float:right'>Casa do Código</span></span></p>",
        footerTemplate: null
    };
}