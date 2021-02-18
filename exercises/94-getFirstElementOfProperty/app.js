var obj = {
    key: [1, 2, 4],
    a: [],
    b: 'John',
  };

const getFirstElementOfProperty = (obj, key) => {
   
   let arrayObj = obj[key];
   
   if(Array.isArray(arrayObj) && arrayObj.length > 0){
       return arrayObj[0]
   }
}

let result = getFirstElementOfProperty(obj, 'key');
console.log(result);