var theme = require("./theme");

module.exports = {
    hooks: {
            init: function(){
                this.options.pdf.customSize = "155x230";

                this.options.pdf.fontSize =  "11";

                this.options.pdf.margin.top =  "62";
                this.options.pdf.margin.bottom =  "62";
                this.options.pdf.margin.left =  "62";
                this.options.pdf.margin.right =  "62";

                this.options.pdf.headerTemplate = "<p id='ebook-header' style='border-bottom: 1px solid black; margin-top: 36pt;'><span class='odd_page'><span>Casa do Código</span><span style='float:right'>_SECTION_</span></span><span class='even_page'><span>_SECTION_</span><span style='float:right'>Casa do Código</span></span><script>if(!(/^[0-9]/.test('_SECTION_'))) { document.getElementById('ebook-header').style.display='none'; }</script></p>";

                this.options.pdf.footerTemplate = "<p id='ebook-footer'></p><script>var footer = document.getElementById('ebook-footer'); footer.innerHTML = _PAGENUM_ - 2; if(_PAGENUM_ % 2 != 0){ footer.style.textAlign = 'right'; }</script>";
                
                this.options.pdf.summary = {};
                this.options.pdf.summary.headerTemplate = "<p id='ebook-header' style='border-bottom: 1px solid black; margin-top: 36pt;'><span class='odd_page'><span>Casa do Código</span><span style='float:right'>Sumário</span></span><span class='even_page'><span>Sumário</span><span style='float:right'>Casa do Código</span></span></p>";
                
                this.options.pdf.summary.footerTemplate = null;
            }
    }
    , ebook: theme.ebook
    , book: theme.book
    , templates: theme.templates
}
