let person = {
    name: '',
    favoriteNumbers: [13, 21, 27, 33],
    phones: [],
};


const getAverageOfElementsAtProperty = (obj, key) => {
    let sum = 0;
    let average = 0;
    for(let i = 0; i < obj[key].length; i++) {
        if(obj[key].length === 0){
            average = 0;
        }else {
            sum += obj[key][i]     
        }
        average = sum / obj[key].length;
    }

    return average;
};

let result = getAverageOfElementsAtProperty(person, 'favoriteNumbers') 
console.log(result)