// to extract the first half of a string of even length.

const myStr = "helloo";

const func =(str)=> {
    return str.slice(0, str.length/2);
};

console.log(func("helloooo"));