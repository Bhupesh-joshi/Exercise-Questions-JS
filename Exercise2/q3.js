// to concatenate two strings except their first character.

const concat = (str1, str2) =>{
    return str1.slice(1) + str2.slice(1);
};

console.log(concat("O hello ", "O world"));