const keep = (arr, element) => {
    let newArray = [];
    newArray = arr.filter(x => x === element);
    return newArray;
}

let result = keep([1, 2, 3, 2, 1], 0);
console.log(result);