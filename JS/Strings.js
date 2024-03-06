//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Strings in Js ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const name = "deep"
const age = 21
console.log(name + age + "Value"); //deep21Value

console.log(`Hello my name is ${name} and my age is ${age}`) //String Interpolation example

const gameName = new String('PUBG') //DECLARE STRINGS

//--------------------------------------------------------STRING OPERATIONS--------------------------------------------------------

// console.log(gameName); //[String: 'PUBG']

// console.log(gameName[0]); //P 0th position  

// console.log(gameName.__proto__); //{}

// console.log(gameName.length); //4   

// console.log(gameName.toLowerCase()); //pubg

// console.log(gameName.charAt(2));  //B  

// console.log(gameName.indexOf('B'));  //2

const gameNames = new String('PUBG-GAME') //DECLARE STRINGS

const newStrng = gameNames.substring(0,3) //example of substring PUB // last number char. not includ in o/p
console.log(newStrng);

const anotherstring = gameNames.slice(0,6) //PUBG-G you can give negative values in slice
console.log(anotherstring);

const newStringOne = "   deep   "
console.log(newStringOne); //   deep   
console.log(newStringOne.trim()); //deep   //example of trim()

const url = "https://deep.com/deep%20darji"
console.log(url.replace('%20','-')); //https://deep.com/deep-darji example of replace()


console.log(url.includes('deep')); //true example of includes
console.log(url.includes('bdfbsb')); //false example of includes

//Split()
const gameNames2 = new String('PUBG-GAME-IS-MY-BEST-GAME') //Strings to array With Split()
console.log(gameNames2.split('-')); //[ 'PUBG', 'GAME', 'IS', 'MY', 'BEST', 'GAME' ]
