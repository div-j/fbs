
//1 sum array
const numbers = [2,3,4,5,6,7]

function sumArray(array) {

    let sum = 0
    for (const i of array) {
        sum +=i
    }
    return sum
    
}

console.log(sumArray([10,30,40]));

//2 adding 2 to each item in an array
function mapUsage(array) {
    return array.map((item)=>item+2)
}

console.log(mapUsage([20,30]));


// 3 merging two arrays
let array1 = [2,4,5,7]
let array2 = [6,3,9,7]

let mergedArray = [...array1,...array2]
console.log(mergedArray);


//4 max number
function maxNum(array) {
    let max = 0
    for (const i of array) {
        if (i>max) {
            max = i
        }     
    }
    return max
}

console.log(maxNum([2,3,62,40,40]));

