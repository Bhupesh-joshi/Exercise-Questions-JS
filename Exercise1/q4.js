// write the program to get the current date

// const date = new Date();
// console.log(date);

// const formatDate = (date = new Date())=> {
//     const day = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     return `${day}/ ${month}/ ${year}`;
// };

// console.log(formatDate());



// const todayDate = new Date();
// console.log(todayDate);

const DateFunc = (todayDate = new Date()) => {
    const d = todayDate.getDate();
    const m = todayDate.getMonth();
    const y = todayDate.getFullYear();
    return `${d}/${m}/${y}`;
};

console.log(DateFunc());