import { fromNavLangToLocale } from '../../utils';

describe("dates utils functions", () => {
    let navigatorLanguageSpy;

    beforeEach(() => {
        navigatorLanguageSpy = jest.spyOn(Object.getPrototypeOf(navigator), 'language', 'get');
    });

    it("handles default localization", () => {
        // navigator.language is `en-US` by default
        let locale = fromNavLangToLocale();
        expect(locale.code).toEqual("en-US");
    });

    it("handles french localization", () => {
        navigatorLanguageSpy.mockReturnValue("fr");
        let locale = fromNavLangToLocale();
        expect(locale.code).toEqual("fr")
    });


    afterEach(() => {
        navigatorLanguageSpy.mockRestore();
    });
});