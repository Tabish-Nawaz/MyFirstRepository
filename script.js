// ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// // First Promise 
// const Promise1 = new Promise(function (resolve,reject) {
//   setTimeout(function() {
//     console.log('Async is completly Finished');
//     resolve();
//   }, 1000);
// });

// Promise1.then((value) => {
//   console.log("Good Work");
  
// });



// ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// // Second Promise 
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("This Task is Complete");
//         resolve();
//     },2000);
// }).then(() => {
//     console.log("Promise FulFilled Consumed");
// });

// // ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// // // Third Promise
// const Promise3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("Third Promise Example");
//     resolve({user: "Tabish", email: "tabishnawaz311@gmail.com"});
//   }, 3000);
// })

// Promise3.then((Person1) => {
//   console.log(Person1);
  
// });



// ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// // Fourth Promise Understanding with Error 

// const PromiseFour = new Promise((resolve,reject) => {
//   setTimeout(() =>{
//     let Error  = true;
//     console.log("Fourth Promise Example");
//     if(!Error){
//         resolve({username: "Tabish" , Password: "123"});
//     }else{
//       reject("Error Something went Wrong!"); 
//     }
    
//   }, 4000);
// });

// PromiseFour.then((Person) =>{
//     console.log(Person);
//     return Person.username; 
// }).then((username) => {
//     console.log(username);
// }).catch((error)=> {
//   console.log(error);
// }).finally(() => {
//   console.log('Finally');
// });




// ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// // Fifth Promise
// const FifthPromise = new Promise((resolve,reject) => {
//  setTimeout(() =>{
//     let Error  = true;
//     console.log("Fourth Promise Example");
//     if(!Error){
//         resolve({username: "Tabish" , Password: "123"});
//     }else{
//       reject("Error Something went Wrong!"); 
//     }
    
//   }, 5000);
// });

// async function consumepromisefive() {
//   try {
//       const response = await FifthPromise 
//   console.log(response);
    
//   } catch (error) {
//     console.log(error);
    
//   }
  
// }

// consumepromisefive();


// //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\


// // Fetch Api Basic 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// }).catch((error) => console.log(error));





  

// const randamcolor = function () {
//   const hax = '0123456789ABCDEF';
//   let color = "#";
//   for(let i=0;i<6;i++){
//     color += hax[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervalid;

// console.log(randamcolor());
// const startchangecolor = () =>{
//   if(!intervalid){
// intervalid = setInterval(changebgcolor, 1000);

//   }
  
//   function changebgcolor() {
//     document.body.style.backgroundColor = randamcolor();
//     document.body.style.transition = 1 + "s";
//   }
//   };
// const stopchangecolor = function () {
//   clearInterval(intervalid);
//   intervalid = null;
// };


// document.querySelector("#start").addEventListener('click',startchangecolor);

// document.querySelector("#stop").addEventListener('click',stopchangecolor);


// if (true) {
//   let A = 10;
//   const b = 20;
//   var c = 30;
// }


// console.log(c);


// // (IIFE (Immediately Invoked Function Expression))

// (function Code() {
//     console.log("Code is run");
// })();
// ((name) => {
//   console.log(`${name} is a good boy.`);
// })("Tabish");


// function setusername(username){
//   this.username = username;
// };
// function createuser(username,email,Password) {
//   setusername.call(this,username);
//   this.email = email;
//   this.Password = Password;
// }

// const chai = new createuser("Chai","Chai@fb.com",'123');

// console.log(chai);

// let Alias_Name = prompt("");
// if(Alias_Name == ""){
//   console.log("Something went wrong");
// }else if(Alias_Name == "string"){
// let FinalName = Alias_Name.split(" ");
// let Result = FinalName.map(word => word[0].toUpperCase()).join("");
// console.log(Result);}

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Async Await Example in the js 

// // Function that returns a Promise
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("✅ Data received successfully!");
//     }, 2000); // waits 2 seconds
//   });
// }

// // Async function using await
// async function showData() {
//   console.log("⏳ Fetching data...");

//   let result = await getData(); // waits until Promise is done

//   console.log(result);
//   console.log("🎉 All done!");
// }

// // Call the function
// showData();



// const course = {
//     coursename: "JS in English", 
//     instructorName: "Tabish",
//     price: 99
// };

// console.log(course.instructorName);


// let Arr = ["Apple", "Banana", "Litchi", "Grapes", "Watermelon"];
// let [f1,f2,f3,f4,f5] = Arr;

// console.log(f1);


// let Alias_Name = 'tabish nawaz';
// if(Alias_Name == ""){
//   console.log("Something went wrong");
// }else if(Alias_Name == "string"){
// let FinalName = Alias_Name.split(" ");
// var Result = FinalName.map(word => word[0].toUpperCase()).join("");
// console.log(Result);
//}

// const Person = ["Tabish", 22, "Lahore", "BS(IT)", "Programming"];
// const [Name,Age,City,Degree,Skill] = Person;

// console.log(Name);






































