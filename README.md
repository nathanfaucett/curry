curry
=======

creates function with arguments bound to it


```javascript
var curry = require("@nathanfaucett/curry");


function add(x, y) {
    return x + y;
}

/*
function one_plus(y) {
    return add(1, y);
}
*/
var one_plus = curry(add, 1);

one_plus(5); // 6
```
