let arr = ['a', 'c', 'e'];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

const select = (arr, obj) => {
    let newObject = {};

    arr.forEach(element => (element in obj)? newObject[element] = obj[element] : null);
    return newObject
}


let result = select(arr, obj);
console.log(result);