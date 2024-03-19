// Leap Year

// const year = 2024;

const year = (thisYear) => {
    if(thisYear%100 === 0) {
        return "this Year is " + thisYear + " leap year";
    } else {
        return "this Year is " + thisYear + " Not leap Year";
    }
};

console.log(year(2023));
