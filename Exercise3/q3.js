// to check whether a given array of integers is sorted in ascending order

const isAscending = (arr)=> {
    for(let i=0; i<arr.length; i+= 1){
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([10,2,3,4,5,6,7,8,9]));
