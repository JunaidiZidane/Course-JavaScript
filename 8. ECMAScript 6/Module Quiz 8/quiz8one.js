const num = 5;
const calc = (x, y, z = num) => {
    return x + y + z;
}
console.log(calc(1, 2, 4));