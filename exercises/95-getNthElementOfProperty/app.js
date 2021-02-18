var obj = {
    key: [1, 2, 6, 3],
    a: [],
    b: 'John',
  };

const getNthElementOfProperty = (obj, key, value) => {
    let arrayObj = obj[key];
    
    if(Array.isArray(arrayObj) && arrayObj.length > 0){
        return arrayObj[value]
    }
}

let result = getNthElementOfProperty(obj, 'b', 1);
console.log(result);