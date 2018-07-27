const array = [];
const newArray = new Array();

console.log(typeof array); // object

const array1 = ['HTML', 'CSS'];
console.log(array1);

array1[2] = 'JS';
console.log(array1);
console.log(array1.length);


let arrayG = [1, 2, 3, 4];
let newArrayG = arrayG;
console.log(arrayG);
console.log(newArrayG);

newArrayG[2] = 555;
console.log(arrayG);
console.log(newArrayG);



// ARRAY METHODS 

// push() - добавляет в конец массива елементы и возвращает его.
const array2 = ['html'];
array2.push('css');
console.log(array2);

const newArray2 = ['HTML'];
for (let i = 0; i <= 10; i++) {
    newArray2.push('new index is ' + i);
}
console.log(newArray2);


// pop() - удаляет последний элемент массиваб уменьшает длинну, и возвращает удаленное значение.
const arrayPop = ['html', 'css', 'js'];
console.log(arrayPop);

const deleted = arrayPop.pop();
console.log(arrayPop);
console.log(deleted);


// unshift() - добавляет элементы или элементы в начало массива.
const arrayUnshift = ['html', 'css', 'js'];
console.log(arrayUnshift); //["html", "css", "js"]
arrayUnshift.unshift(true);
console.log(arrayUnshift); //[true, "html", "css", "js"]












