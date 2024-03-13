// write program to get the extension of a filename 

const getFileExtension = (string)=> {
    return string.slice(string.lastIndexOf("."));
};

console.log(getFileExtension("filename.cpp"));