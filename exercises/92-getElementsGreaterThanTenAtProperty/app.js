var obj = {
    key: [1, 20, 30],
    a: [],
    b: [1, 2, 3, 4],
  };

const getElementsGreaterThan10AtProperty = (obj, key) => {
    let arrayObj = [];
    
    for(let value in obj[key]) {
        if(obj[key][value] > 10) arrayObj.push(obj[key][value]);
    }

    return arrayObj;
}

let result = getElementsGreaterThan10AtProperty(obj,'key');
console.log(result);