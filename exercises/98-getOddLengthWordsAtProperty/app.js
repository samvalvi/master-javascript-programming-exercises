var obj = {
    key: ['It', 'has', 'some', 'words'],
    a: [],
    b: [2, 3, 6],
    c: 'Johnnie',
  };

const getOddLengthWordsAtProperty = (obj, key) => {
    let newArray = [];
    let filterValue = x => typeof x !== 'number' && x.length %2 !== 0

    if(Array.isArray(obj[key])){
      newArray = obj[key].filter(filterValue);
    }
    return newArray
    
}

let result = getOddLengthWordsAtProperty(obj, 'b');
console.log(result);