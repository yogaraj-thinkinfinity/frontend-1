const jsonData = '{ "name": "John", "age": 22 }';

const obj = JSON.parse(jsonData);

console.log(obj); 

const myData = { name: "John", age: 22 };

const obj2= JSON.stringify(myData);

console.log(obj2); 


fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).
  then(data=>console.log(data))
 
obj1={
    name:"raj",
    age:21,
    position:"developer"
}


obj5={...obj1}
obj5.name='bala'
console.log(obj1)
console.log(obj5)