/*global jQuery, Sizzle */

(function (exports) {
    'use strict';

    function createSelectorAlias() {
        if (window.Sizzle) {
            return window.Sizzle;
        } else if (window.jQuery && window.jQuery.find) {
            return window.jQuery.find;
        } else {
            return function (select, start) {
                if (typeof start === "object" && start.querySelectorAll) {
                    return start.querySelectorAll(select);
                } else if (typeof start === "string") {
                    return document.querySelectorAll(start + " " + select);
                } else {
                    return document.querySelectorAll(select);
                }
            };
        }
    }

    exports.Selector = {
        "$": function (id) {
            return document.getElementById(id);
        },

        "$$": createSelectorAlias(),

        _createSelectorAlias: createSelectorAlias
    };

})(this);