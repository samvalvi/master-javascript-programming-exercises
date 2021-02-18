var obj = {
    key: [1, 2, 5],
    a: 'John',
    b: []
  };

const getLastElementOfProperty = (obj, key) => {
    let arrayNew = obj[key];

    if( Array.isArray(arrayNew) && arrayNew.length > 0) return arrayNew[arrayNew.length -1]
}

let result = getLastElementOfProperty(obj, 'a');
console.log(result);