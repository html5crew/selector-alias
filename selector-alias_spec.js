/*global jasmine, describe, it, xit, expect, fail, beforeEach, afterEach, spyOn, waitsFor, runs */
describe('selector-alias', function () {
    'use strict';

    var _nativeQuerySelectorAll;

    beforeEach(function () {
        _nativeQuerySelectorAll = document.querySelectorAll;
    });

    afterEach(function () {
        delete window.Sizzle;
        delete window.jQuery;
        document.querySelectorAll = _nativeQuerySelectorAll;
    });

    it('use Sizzle if the page has sizzle', function () {
        window.Sizzle = jasmine.createSpy();
        var alias = Selector._createSelectorAlias();
        alias('.find somthing');
        expect(window.Sizzle).toHaveBeenCalled();
    });

    it('use jQuery.find if the page has jquery', function () {
        window.jQuery = {
            find: jasmine.createSpy()
        };
        var alias = Selector._createSelectorAlias();
        alias('.find somthing');
        expect(window.jQuery.find).toHaveBeenCalled();
    });

    it('use querySelectorAll if the page doesn\'t have any library', function () {
        document.querySelectorAll = jasmine.createSpy();
        var alias = Selector._createSelectorAlias();
        alias('.find somthing');
        expect(document.querySelectorAll).toHaveBeenCalled();
    });

});