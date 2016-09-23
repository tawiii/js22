var app = require('../js.js');

describe("app", function() {
    it("contains spec with an expectation", function() {
        var result;

        result = app.pow(3, 3);

        expect(result).toBe(27);
    });
    it("describe", function() {
        expect(app.pow(2, 3)).toBe(8);
    });
    it("describe", function() {
        expect(app.pow(2, 4)).toBe(16);
    });
    it("describe", function() {
      expect(app.pow(4, 2)).toBe(16);
    });
});
