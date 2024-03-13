// const score = 400;
// console.log(score); //400

// console.log(score.toString().length);  //3

// console.log(score.toFixed(3)); //400.000

// const otherscore = 456.789;
// console.log(otherscore.toPrecision(3)); //457
// console.log(otherscore.toPrecision(4)); //456.8

// const score1 = 1000000;
// console.log(score1.toLocaleString()); //1,000,000 US STANDARD
// console.log(score1.toLocaleString('en-IN')); //10,00,000 INDIAN STANDARD


//++++++++++++++++++++++++++++++++++++++==MATHS++++++++++++++++++++++++++++++++++++++++++
// const h = 100000
// console.log(Math); //Object [Math] {} THIS IS OBJECT AND IT HAVE PROPERTIES.
// console.log(Math.abs(5));       //5   //abs = absoulute value only - value wil be  + 
// console.log(Math.round(5.7));  // 6  //round of value
// console.log(Math.ceil(5.2));  // 6  // ceiling value
// console.log(Math.floor(5.9));//5   // floor value
// console.log(Math.min(5,6,7,8,9));  //5
// console.log(Math.max(5,6,7,8,9));  //9
// console.log(Math.random()); //0.9855617337732567 always value will get between 0 to 1 
// console.log((Math.random()*10) + 1); //guruntee we will not get 0

//+++++++++++++++++++++++++++++++++++++++FORMULA+++++++++++++++++++++++++++++++++++
const min = 20
const max = 40
(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //IMP FORMULA TO GET RANGE VALUE FROM MIN AND MAX