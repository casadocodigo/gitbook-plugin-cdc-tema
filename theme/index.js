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
    pdfOptions: pdfOptions
};

function obtainExtension(options) {
	var extension = options.extension || path.extname(options.output).replace(".", "");
	if (!extension && options.format === "ebook") {
		extension = "pdf";
	}
	return extension;
}

function pdfOptions(){
    this.options.pdf.customSize = "155x230";

    this.options.pdf.fontSize =  "11";

    this.options.pdf.margin.top =  "62";
    this.options.pdf.margin.bottom =  "62";
    this.options.pdf.margin.left =  "62";
    this.options.pdf.margin.right =  "62";

    this.options.pdf.headerTemplate = "<p id='ebook-header' style='border-bottom: 1px solid black; margin-top: 36pt;'><span class='odd_page'><span>Casa do Código</span><span style='float:right'>_SECTION_</span></span><span class='even_page'><span>_SECTION_</span><span style='float:right'>Casa do Código</span></span><script>if(!(/^[0-9]/.test('_SECTION_'))) { document.getElementById('ebook-header').style.display='none'; }</script></p>";
    this.options.pdf.footerTemplate = "<p id='ebook-footer'></p><script>var footer = document.getElementById('ebook-footer'); footer.innerHTML = _PAGENUM_ - 2; if(_PAGENUM_ % 2 != 0){ footer.style.textAlign = 'right'; }</script>";

    this.options.pdf.summary = {
        headerTemplate: "<p id='ebook-header' style='border-bottom: 1px solid black; margin-top: 36pt;'><span class='odd_page'><span>Casa do Código</span><span style='float:right'>Sumário</span></span><span class='even_page'><span>Sumário</span><span style='float:right'>Casa do Código</span></span></p>",
        footerTemplate: null
    };
}