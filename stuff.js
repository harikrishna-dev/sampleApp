function counter(arr) {
    return 'This arr have ' + arr.length + ' elements.'
}

function adder(a,b) {
    return `Sum is ${a+b}`
}

function sub(a,b) {
    return `Sub is ${a+b}`
}
module.exports = {
    counter: counter,
    adder: adder,
    sub: sub
}