//-----------------------------------------------------------------------------------------------------------------------------
//1--->**************************************8DATATYPES BASICS************************************************************

// "use strict"; //treat all js code to new version.
// //alert("Hello"); // Using Node js Not Browser Not Working
// let name="deep"
// let age = 18
// let isLoggedin = true

// console.log(typeof age);
// console.log(typeof "deep");
// console.log(typeof undefined); //output will be undefined
// console.log(typeof null); //output will be Object

//-------------------------------------------------------------------------------------------------------------------------------
// //2--->*********************************CONVERSION OPERATION********************************************************

// let score = "deep"; //if null then output 0 & undefined then ouput undefined
// console.log(typeof score);
// let ValueInNumber = Number(score)
// console.log(ValueInNumber); output will be NaN Not a Number
// console.log(typeof ValueInNumber);

//"33"=>33
//"33abc"=>NaN
//"true/false"=>1/0

//FOR BOOLEAN
// let isLoggedin = 1;
// let ConvertBollean = Boolean(isLoggedin)
// console.log(ConvertBollean);

//1/0=>true/false
//""=>false
//"deep"=>true

//--------------------------------------------------------------------------------------------------------------------------------
//***********************************************OPERATIONS IN STRINGS***************************

// let Value = 5
// let minus = -Value;
// console.log(minus);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2); //reminder
// console.log(2**2); //power 2 res to 2

// let str = "deep"
// let str2 = "darji"
// console.log(str + str2); // concate string deepdarji
// console.log(2 + "1"); // concate string output 21
// console.log(str + "1"); // concate string output deep1
// console.log("1" + 2 + 2); // ouput 122
// console.log(1 + 2 + "2" + "45"); // ouput 3245
// console.log((1+2) * 3 % 4 / 5); //always use parenthisis best practice


//-------------------------------------------------------------------------------------------------------------------------------
//PREMETIVE (CALL BY VALUE)
//STRING,NUMBER,BOOLEAN,NULL(EMPTY),UNDEFINED,Symbol(to make value unique),big int(for big numbers)
//EXAMPLE OF SYMBOL
// const id = Symbol('123');

//JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE
//const score = 100; //NO NEED TO 

// NON PREMETIVE --> REFERENCE TYPE DATATYPE MEANS 
//ARRAYS,OBJECTS,FUNCTIONS

//arrays example
// const heros = ["deep","spd","abc"]

//objects example
// let obj = {
    //name:"deep",  //objects key value in pair
    //age:"18"
//}


//FUNCTIONS
// const myFunction = function () {
//     console.log("Hello");
// }

//RETURN TYPE OF DATATYPES BY CHECKING WITH typeof
//  Undefined --> "undefined"
//Null --> "Object"
//Boolean --> "boolean"
//Number --> "number"
//String -->"string"