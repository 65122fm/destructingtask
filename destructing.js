// const numbers = [1, 2, 3, 4, 5];
// let [a,b,c,d,e] = numbers;
// console.log(a,b,c,d,e);


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
//   }; 
// let {firstName, lastName, age}= person;
// console.log(firstName,lastName,age);


// const persons = {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     age: 25
//   };

//   const printf =() =>{
//     let {firstName, lastName , age } =persons;
//     console.log(`${firstName+" "+ lastName} is ${age} years old `); 
//   }
//   printf();


//   const user = {
//     id: 1,
//     username: 'john_doe',
//     email: 'john@example.com',
//     details: {
//       firstName: 'John',
//       lastName: 'Doe',
//       address: {
//         city: 'New York',
//         zipCode: '10001'
//       }
//     }
//   };  
//   let {username,details:{firstName} , details:{address:{ city}} } = user
// console.log(username,firstName,city);


// const numbers = [1, 2, 3, 4, 5];
// const [first, ...restOfNumbers] = numbers;
// console.log(first);   
// console.log(...restOfNumbers);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];


// const numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(function(x){
//     return x*2;
// })
// console.log(newNumbers);

// let evenNumbers = numbers.filter(function(y){
//     return y%2==0;
// })
// console.log(evenNumbers);


// const users = [
//     { id: 1, name: 'Alice', age: 28 },
//     { id: 2, name: 'Bob', age: 32 },
//     { id: 3, name: 'Charlie', age: 25 },
//     { id: 4, name: 'David', age: 40 },
//   ];
  let ageOver30 = users.filter((f)=>f.age>30).map((f)=> f.name)
  console.log(ageOver30);
  
const defaultSettings = { theme: 'light', fontSize: 16 };
const userSettings = { fontSize: 18, showSidebar: true };

let mergenSettings = {...defaultSettings,...userSettings};
console.log(mergenSettings);    

const number = [1, 2, 3, 4, 5, 6];
let z=0;
let counter = 1;
const result = number.filter((t)=>t%2==0 , counter+=1).map(function(t){
    t*=2;
    z+=t;
    return z; 
})
console.log(result[counter]);

const person = {
    name: 'Alice',
    address: {
      city: 'New York',
      zip: '10001',
    },
  };

const {name ,address:{ city, zip} } = person;
console.log(name, city ,zip);



  
