/// <reference path="../../../typings/tsd.d.ts" />

import CoolComponentProps from '../../coolComponent/models/CoolComponentProps';
//
describe("CoolComponentProps", () => {

    it("Can be instantiated", () => {
        var coolComponentProps = new CoolComponentProps("some value");
        expect(coolComponentProps).toEqual(jasmine.any(CoolComponentProps));
    });
});