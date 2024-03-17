// to find the number of even digits in a array of integers. 

// const numbers = [1, 2, 3, 4, 5, 6];

const countEvenDigits = (arr)=> 
    arr.filter(num => num % 2 === 0).length;

console.log(countEvenDigits ([1,2,3,4,5,6]));