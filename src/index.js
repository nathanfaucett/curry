var isFunction = require("@nathanfaucett/is_function"),
    fastSlice = require("@nathanfaucett/fast_slice"),
    createFunctionWrapper = require("@nathanfaucett/create_function_wrapper");


module.exports = curry;


function curry(fn) {
    if (!isFunction(fn)) {
        throw new TypeError("curry(fn, ...args) fn must be a function");
    }
    return baseCurry(fn, arguments.length > 1 ? fastSlice(arguments, 1) : null);
}

function baseCurry(fn, args) {
    var bound = createFunctionWrapper(fn),
        wrapper = bound.__wrapper__;

    wrapper.addArgsLeft(args);

    return bound;
}
