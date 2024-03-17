// to replace the first digit in a string (should contain at least digit) with $ character

const replaceFirstDigit = (str) =>
    str.replace(/[0-9]/, '$')

console.log(replaceFirstDigit("abcd5Abcd"));

console.log(replaceFirstDigit("abcd1234abcdef"));