// given two values, write a program to find out which one is nearest to 100

const near100 = (a, b) => {
    return (100-a) < (100-b) ? a : b;
};

console.log(near100(50, 60));