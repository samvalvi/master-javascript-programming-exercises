var obj = {
    key: [1000, 20, 50, 500],
    a: [103, 788, 110, 213],
    b: [],
    c: 'John',
  };

const getElementsLessThan100AtProperty = (obj, key) => {

    let arrayLessThan100 = [];

    for(let value in obj[key]){
        if(obj[key][value] < 100) arrayLessThan100.push(obj[key][value])
    }

    return arrayLessThan100;
}

let result = getElementsLessThan100AtProperty(obj, 'j');
console.log(result);