// a = 20;
// b = 30;

// if(a+b === 100){
//     console.log("true");
// } else if(a === 100) {
//     console.log("true");
// } else if(b === 100) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// Question 1: to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) =>{
    return a === 100 || b === 100 || (a+b === 100);
};

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(20,70));
console.log(isEqualTo100(10,200));

console.log(isEqualTo100(90,10));
console.log(isEqualTo100(50,50));

