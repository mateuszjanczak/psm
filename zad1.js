function sum() {
    const args = Array.from(arguments);
    let sum = 0;

    args.forEach(e => sum += e)

    return sum;
}

console.log(sum(1, 2, 3, 4, 5));