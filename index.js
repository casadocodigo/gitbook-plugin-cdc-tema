var theme = require("./theme");

module.exports = {
    hooks: {
        init: function(){
            theme.setOptions.call(this);
        }
    }
    , ebook: theme.ebook
    , book: theme.book
    , templates: theme.templates
}
