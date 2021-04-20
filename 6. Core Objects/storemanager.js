function main() {
    let increase = parseInt(readLine(), 10);
    let prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    let newPrices = [];
    for(let i = 0; i < prices.length; i++){
        newPrices.push(prices[i] + increase);
    }
    console.log(newPrices)
}