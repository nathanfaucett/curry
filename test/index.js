var tape = require("tape"),
    curry = require("..");


tape("curry(fn, ...args)", function(assert) {
    function test(a) {
        return "age: " + a;
    }

    bound = curry(test, 32);

    assert.equal(bound(), "age: 32", "should curry args to passed function");
    assert.end();
});
