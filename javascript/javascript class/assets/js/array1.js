let stu1 = "priya"
let stu2 = "hari"
let stu3 = "kumar"


let students = ["priya","hari","lokesh","kumar"];
var numbers = [2,5,8,1,22,76,8];
const values = ["Shibina",true, 233, [0,23,"sudha"]]


numbers.length  // number of elements in an array

// get values
students[0] // priya
values[3][4]    // sudha

// get last element of an array
numbers[numbers.length-1]

// get index using value
numbers.indexOf(22)

numbers.push(2) // adds 2 to the end of array
numbers.pop()   // removes last element from array
numbers.unshift(3)  // adds 3 to start of array
numbers.shift() // removes first element from array

numbers.slice(2,5)  // .slice( startIndex, endIndex)    copies element from startIndex till endIndex without including endIndex
numbers.splice(3,6) // .splice(startIndex, number_of_elements_to_be_removed)    cuts element from startIndex and removes totally 10 from array

for(let i=1; i<=100; i++) {
    // console.log(i);
}

for(let i=100; i>=1;i--) {
// console.log(i);
}

var total = 0;
for (let i=0; i<=numbers.length-1; i++) {
    total = total + numbers[i]; // total += numbers[i]
}
console.log(Math.abs(total));

// before map
var newArr = [];
for(let i=0; i<=numbers.length-1; i++) {
    newArr.push(numbers[i] * 10)
}
console.log(newArr,'-----------');

// after map
var newArr1 = numbers.map((number,index) => {
    return number*10;
})
console.log(newArr1);

// simplified map function
let newarrr = numbers.map(num=> num *10)

console.log(numbers,'numbers');
var filteredArr = []
for(let i=0; i<=numbers.length-1; i++) {
    if(numbers[i] >= 5) {
        filteredArr.push(numbers[i])
    } else {
        // 
    }
}
console.log(filteredArr, ' filtered array');

let fil_arr = numbers.filter(num=> num >=5) // retuns all the elements that satisfies the condition in an array

console.log(fil_arr, ' fil array');

let find_arr = numbers.find(num=> num >=5)
console.log(find_arr);// returns only the first element that satisfies the condition

// reverse an array
numbers.reverse()
// sort array in ascending order
numbers.sort((a,b)=>a-b)
// sort array in descending order
numbers.sort((a,b)=>b-a)

// for alphabets
students.sort() // ascending order
students.sort().reverse()   // descending


// check if an element exists in an array
students.includes('priya')  // true

// join two arrays
let arr1 = [2,3,4];
let arr2 = [5,6,7]; 
arr1.concat(arr2)

let str = 'sleeping playing cooking cycling drawing photography gardening listening-music eating';
str.split(' ');
str.split(' ').join()

let tags = ["history", "america","crime"]   // #history #america #crime

let hashtags = tags.map(tag => {
    return '#' + tag;
})

let hashtagText = hashtags.join(' ')

console.log(hashtags,'hashtags');

// find out if our data type is array
Array.isArray(arr2) // returns true only if it is an array

    // normal function
function abc(num1, num2) {
    num1+num2
}

abc(2,3)
abc(4,7)

// arrow function
const bcd = (num1, num2) => {num1+num2;}
bcd(2,1);
bcd(6,7)
