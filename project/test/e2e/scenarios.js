'use strict';

describe('Some describe', function () {

    it('should redirect to 404', function () {
        browser.get('/test');
        browser.getLocationAbsUrl().then(function (url) {
            expect(url).toBe('/404');
        });
    });
});
