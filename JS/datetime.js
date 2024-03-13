//   let myDate = new Date()
//   console.log(myDate); // 2024-03-13T16:57:07.812Z
//   console.log(myDate.toString()); // Wed Mar 13 2024 16:58:52 GMT+0000 (Coordinated Universal Time)
//   console.log(myDate.toDateString()); // Wed Mar 13 2024
//   console.log(myDate.toLocaleString()); // 3/13/2024, 4:58:52 PM
//   console.log(myDate.toJSON()); // 2024-03-13T16:58:52.902Z
//   console.log(myDate.toUTCString());// Wed, 13 Mar 2024 16:58:52 GMT 
  
//   console.log(typeof(myDate)); // object

  // const myDateanother = new Date(2024,1,24)
  // console.log(myDateanother.toDateString()); //Sat Feb 24 2024    //IN JS YEAR ALWAS STARTS FROM 0 HERE 1 MEANS FEB
  // const anotherdates = new Date(2023,0,5,2,7)
  // console.log(anotherdates.toLocaleString()); // 1/5/2023, 2:07:00 AM

  // let newDate = new Date("2023-05-01") //5/1/2023, 12:00:00 AM
  // console.log(newDate.toLocaleString());

  // let mmddyyy = new Date("01-05-2025") // 1/5/2025, 12:00:00 AM
  // console.log(mmddyyy.toLocaleString()); 
  // console.log(mmddyyy.getTime()); //1736035200000 in milisec


  // let d = Date.now() // 1710350421783 value get in millisec
  // console.log(d); 
  // console.log(Math.floor(Date.now()/1000)); //  if you have to get date in seconds 

  let newdd = new Date()

  console.log(newdd);

  console.log(newdd.getDate());

  console.log(newdd.getDay());

  console.log(newdd.getMonth());

  console.log(newdd.getHours());

newdd.toLocaleString('default',{
  weekday:"long", //to get long name
})
