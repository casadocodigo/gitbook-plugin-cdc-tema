var theme = require("./theme");

module.exports = {
    hooks: {
        init: function(){
            theme.pdfOptions.call(this);
        }
    }
    , ebook: theme.ebook
    , book: theme.book
    , templates: theme.templates
}
