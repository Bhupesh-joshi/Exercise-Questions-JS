// to get the largest even number from an array of integers

const largestEven = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));

    console.log(largestEven([1, 2, 3]));
