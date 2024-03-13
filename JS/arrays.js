// // //ARRAYS

// // const a = [] // declare arrays
// // const h = ["a","b","c"] // declare arrays
// // const d = new Array(1,2,3,4,5) // declare arrays

// // const b = [10,11,12,13,15,"deep",true] //array elements


// // console.log(b[2]); // 12      // access value of array by index

// // //array methods
// // b.push(16)
// // console.log(b); //push element to last position of original array

// // b.pop()
// // console.log(b); // remove last element of an array

// // b.unshift(0)
// // console.log(b); // push element to first position

// // b.shift()
// // console.log(b); // remove first position element

// // console.log(b.includes(15)); //true  // check elemnt include in array

// // console.log(b.indexOf(12)); //2   //check index of element


// //+++++++++++++++++++++++++++++++++++++++++++++++++IMP METHOD ARRAY+++++++++++++++++++++++++++++++++++++++++++++

// //++++++++++++++++++++++++++++++++++++++++++++++++++SLICE & SPLICE +++++++++++++++++++++++++++++++++++++++++++++

// const myArr = [1,2,3,4,5]
// console.log("A ",myArr); //original array          //A  [ 1, 2, 3, 4, 5 ]


// //SLICE EXAMPLE
// const myArr1 = myArr.slice(1,3) //slice original array   //slice does not include range
// console.log(myArr1); //print myArr1 after slice    //[ 2, 3 ]
// console.log("B ",myArr);   //original array print  //B  [ 1, 2, 3, 4, 5 ]


// //SPLICE EXAMPLE
// const myArr2 = myArr.splice(1,3) //splice original array   //splice include range
// console.log(myArr2); //print myArr2 after splice   //[2,3,4]
// console.log("C ",myArr);   //original array print  //C  [ 1, 5 ]   //***********ORIGINAL ARRAY CHANGE IN SPLICE()**************



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const alphabets1 = ["a","b","c","d"]
// const alphabets2 = ["e","f","g","h"]

//PUSH METHOD
// alphabets1.push(alphabets2)  // push means not merged it will push to lastnode
// console.log(alphabets1);  //  [ 'a', 'b', 'c', 'd', [ 'e', 'f', 'g', 'h' ] ] 
// console.log(alphabets1[4]); // access its 4th element  // [ 'e', 'f', 'g', 'h' ]
// console.log(alphabets1[4][1]);  //f //bad practices


//CONCAT METHOD
// let newall = alphabets1.concat(alphabets2)  //concat 2 arrays
// console.log(newall); // [  'a', 'b', 'c',  'd', 'e', 'f',  'g', 'h']  //returns new array


//SPREAD METHOD
// const alphabets3 = ["i","j","k","l"]
// let newall = [...alphabets1,...alphabets2,...alphabets3] //spread method  //if you have more than 2 arrays to concat
// console.log(newall); //[ 'a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

// //FLAT METHOD
// const complexarray = [1,2,3,[4,5,6],7,[8,9,12,13,14]]
// const realarray = complexarray.flat(Infinity)  //solve complex array with flat
// console.log(realarray);  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13]

//IS ARRAY METHOD
console.log(Array.isArray("Deep"));  //false this is to check array or not

//FROM METHOD TO CONVERT TO ARRAY
console.log(Array.from("deep")); //[ 'd', 'e', 'e', 'p' ]
console.log(Array.from({name:"deep"})); // []  return empty array *************key se array banana hai ya value se bolna padega

//ARRAY.OF METHOD
let a = 100
let b = 150
let c = 160
let d = 170

console.log(Array.of(a,b,c,d)); //[ 100, 150, 160, 170 ]


