function isPositive(a) {
    if (a > 0) {
        return 'YES'
    } else if (a === 0) {
        return 'Zero Error'
    } else {
        return 'Negative Error'
    }
}
console.log(isPositive(5));