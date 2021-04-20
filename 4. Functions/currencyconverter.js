function main() {
    let amount = parseFloat(readLine(), 10);
    let rate = parseFloat(readLine(), 10);
    console.log(convert(amount, rate));

    function convert(a,b){
        return a*b;
    }


}
console.log(main);