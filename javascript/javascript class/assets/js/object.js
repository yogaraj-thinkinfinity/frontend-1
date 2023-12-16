let student1 = ["raju",23, "B.E","Chennai"];

let student2 = {
    name: "Raju",
    age: 20,
    education: "B.E",
    address: {
        street: "10th street",
        area: "Thiruvanmiyur",
        district: "chennai",
        state: "tamil nadu",
        pincode: 600041
    },
    isMarried: false,
    hobbies: ["cycling","swimming","running"]
}

// object is full of key value pairs. 

let student3 = {
    name: "Somu",
    age: 28,
    education: "B.A",
    address: {
        street: "70th street",
        area: "Adayar",
        district: "tanjavur",
        state: "kerala",
        pincode: 600041
    },
    isMarried: true,
    hobbies: ["swimming","running"]
}

let allStudents = [
    {
        name: "Raju",
        age: 20,
        education: "B.E",
        address: "chennai"
    },
    {
        name: "Raju",
        age: 20,
        education: "B.E",
        address: "chennai"
    },
    {
        name: "Raju",
        age: 20,
        education: "B.E",
        address: "chennai"
    }
]

//  JSON - JavaScript Object Notation
// convert JSON to string
let str = JSON.stringify(student2)

// convert string to JSON
let obj = JSON.parse(str)



// get values
student2.name
student2['name']

//change values
student2.age = 30
student2['age'] = 35

// add values
student2.blood_group = "B+ve"
student2['blood_group_1'] = "O+ve"

// delete keys
delete student2.blood_group
delete student2['bloog_group_1']

// extract all keys from an object
Object.keys(student2);

// extract all values from an object
Object.values(student2);

// extract all pairs
Object.entries(student2)