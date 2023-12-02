const array1 = [0, 1, 2, 3, 4, 5];

 array1.forEach((element) => {
  const newElement = element + 5;
  console.log(newElement);
  return newElement;
});

console.log(array1);

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array.map((element) => {
  const arrayElement = element + 10;
  return arrayElement;
});

console.log(newArray);
console.log(array);

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray2 = array2.filter((element) => {
    
    return element > 4

}
    
    
    );

console.log(array2);
console.log(newArray2);