let ages = [23, 11, 17, 31, 36]

const getAllElementsButNth = (array, index) => {
    array.splice(index, 1)
    return array;
}

let newAges = getAllElementsButNth(ages, 2);
console.log(newAges);