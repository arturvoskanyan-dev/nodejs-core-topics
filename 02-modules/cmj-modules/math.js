function add(a, b) {
    return a + b
}

function sum(arr) {
    return arr.filter(e => e % 2 !== 0);
}

// exports.add = add;

exports.obj = {
    add,
    sum
}