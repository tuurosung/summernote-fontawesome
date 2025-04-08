(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {

    /**
     * Support font-awesome icon class name
     */
    $.extend($.summernote.options.icons, {
        'align': 'fas fa-align-justify',
        'alignCenter': 'fas fa-align-center',
        'alignJustify': 'fas fa-align-justify',
        'alignLeft': 'fas fa-align-left',
        'alignRight': 'fas fa-align-right',
        'indent': 'fas fa-indent',
        'outdent': 'fas fa-outdent',
        'arrowsAlt': 'fas fa-maximize',
        'bold': 'fas fa-bold',
        'caret': 'fas fa-caret-down',
        'circle': 'fas fa-circle',
        'close': 'fas fa-xmark',
        'code': 'fas fa-code',
        'eraser': 'fas fa-eraser',
        'font': 'fas fa-font',
        'italic': 'fas fa-italic',
        'link': 'fas fa-link',
        'unlink': 'fas fa-link-slash',
        'magic': 'fas fa-wand-magic-sparkles',
        'menuCheck': 'fas fa-check',
        'minus': 'fas fa-minus',
        'orderedlist': 'fas fa-list-ol',
        'pencil': 'fas fa-pencil',
        'picture': 'fas fa-image',
        'question': 'fas fa-question',
        'redo': 'fas fa-rotate-right',
        'square': 'fas fa-square',
        'strikethrough': 'fas fa-strikethrough',
        'subscript': 'fas fa-subscript',
        'superscript': 'fas fa-superscript',
        'table': 'fas fa-table',
        'textHeight': 'fas fa-text-height',
        'trash': 'fas fa-trash',
        'underline': 'fas fa-underline',
        'undo': 'fas fa-rotate-left',
        'unorderedlist': 'fas fa-list-ul',
        'video': 'fas fa-video'
    });

}));
