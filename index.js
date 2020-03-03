// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first: first,
//     last: last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   function heOrShe() {
//    return gender.toLowerCase() === "male" ? "He" : "She";
//   };
//   function quantityOfInterests() {
//     let returnedInterests = "";
//     for (let i = 0; i < interests.length; i++) {
//       returnedInterests += interests[i] !== interests[interests.length-1] ? interests[i] + " and " : interests[i];
//     };
//     return returnedInterests;
//   };
//   this.bio = function() {
//     alert(this.name.first + " " + this.name.last + " is " + this.age + " years old. " + heOrShe() + " likes " + quantityOfInterests() + ".");
//   };
//   this.greeting = function() {
//     alert("Hi I'm " + this.name.first + ".");
//   };
// }

// Person.prototype.farewell = function() {
//   alert(this.name.first + " has left the building. Bye for now!");
// };

// let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
// let person2 = new Person("Sarah", "Kernel", 55, "female", ["diving", "vaping", "surfing the net"]); 

// const employee = {
//   'first name': "John",
//   salary: 1000,
//   position: "front-end"
// };

// const company = {
//   "company name": 'SoftServe',
//   "working hours": function() {
//     console.log(`${this['first name']} has to work in ${this["company name"]} from 9am to 5pm`);
//   }
// }

// const john1 = Object.assign({}, employee, company);

// const john = Object.create(john1);

// john.salary = 600;

// let birthday = new Date("February 17 1999");
// let birthday = new Date(Date.UTC(1999, 01, 17, 10, 30));
// console.log(birthday);


  let link = document.querySelector('a');
  link.style.color = 'orange';