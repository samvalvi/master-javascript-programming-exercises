let names = ['John', 'Jenny', 'Melissa']

const addToBackOfNew = (array, element) => {
    return [...array, element]
}

let newNames = addToBackOfNew(names, 'David');
console.log(names);
console.log(newNames);
