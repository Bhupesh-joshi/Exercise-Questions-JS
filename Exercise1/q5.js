// write program to create a new string adding "new!" in front of a given string.
// if the given string beings with "new" already then return the original string


const addNew = (str)=> {
    return str.indexOf('new!') === 0 ? str : `new! ${str}`
};

console.log(addNew("new! Hello world!"));