let values = ['John', 2, 23, 'Johnnie', 'Doe', 17]

const removeElement = (arr, param) => {
   let elements = [];
   if(param.length === 0){
       return elements
   }else{
    elements = arr.filter(e => e !== param)
    return elements;
   }
}

let result = removeElement(values, 2);
console.log(result);