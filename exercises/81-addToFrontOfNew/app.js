let fruits = ['Apple', 'Watermelon', 'Pineapple', 'Strawberries'];


const addToFrontOfNew = (array, element) => {
    return [element, ...array] 
}

let newFruits = addToFrontOfNew(fruits, 'Banana');
console.log(fruits);
console.log(newFruits);