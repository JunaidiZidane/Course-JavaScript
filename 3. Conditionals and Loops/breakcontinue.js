let sum = 0;

for (let i =  4; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    sum += i;
}
document.write(sum);