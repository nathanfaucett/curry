var assert = require("assert"),
    curry = require("../src/index");


describe("curry(fn, ...args)", function() {
    it("should curry args to passed function", function() {
        function test(a) {
            return "age: " + a;
        }

        bound = curry(test, 32);

        assert.equal(bound(), "age: 32");
    });
});
