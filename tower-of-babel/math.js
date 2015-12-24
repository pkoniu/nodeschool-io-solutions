export const PI = 3.141592;

var _sqrt = function(s, x, last) {
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
}

export function sqrt(s, x, last) {
    return _sqrt(s, s/2.0, 0.0);
}

var _square = x => x*x;

export const square = _square;
