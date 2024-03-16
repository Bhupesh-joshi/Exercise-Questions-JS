// to check a given string contains 2 to 4 occurrences of a specified character.

const countChars = (str, char)=> 
    str.split('').filter(ch => ch === char).length;

const contain2To4 = (str, char)=> 
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contain2To4("ooh!", "o"));
console.log(contain2To4("oh!", "o"));
console.log(contain2To4("oooh!", "o"));
console.log(contain2To4("ohoooo!", "o"));