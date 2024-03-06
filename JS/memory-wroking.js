//++++++++++++++++++++++++++++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//two types of memory STACK & HEAP

//1> STACK ---->  PREMETIVE DATATYPE goes into stack (copy milta hai Original value change nhi hoti)
let myYt = "deep"
let anotherName = myYt;
anotherName = 'dadaa'
console.log(myYt); //deep
console.log(anotherName); //dadaa (Value Changed)

//2> HEAP  ----> NON-PREMETIVE DATATYPE goes into heap (original Value milta hai So Changed The Original Value )

let User1 = {
    email:"user1@gmail.com",
    age:"18"
}

let User2 = User1;
User2.email = "User2@gmail.com" //change email and print
console.log(User1.email);  //output User2@gmail.com changed
console.log(User2.email); //output User2@gmail.com changed
 