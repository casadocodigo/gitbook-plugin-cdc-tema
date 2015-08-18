var theme = require("./theme");

module.exports = {
    hooks: {
        init: function(){
			this.options.maxLineLength = 80;
            theme.pdfOptions.call(this);
        }
    }
    , ebook: theme.ebook
    , book: theme.book
    , templates: theme.templates
}
