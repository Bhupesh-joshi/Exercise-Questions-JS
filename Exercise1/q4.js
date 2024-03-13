// write the program to get the current date

// const date = new Date();
// console.log(date);

const formatDate = (date = new Date())=> {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/ ${month}/ ${year}`;
};

console.log(formatDate());