var obj = {
    a: [1000, 10, 50, 10],
    b: [],
    c: [1, 2, 3, 4],
    d: 'john', 
  };

const getElementsThatEqual10AtProperty = (obj, key) => {
    let newArray = []   

    for (let value in obj[key]) {
        if (obj[key][value] === 10) {
            newArray.push(obj[key][value])
        }
    }
    return newArray;
};

let result = getElementsThatEqual10AtProperty(obj, 'd');
console.log(result);