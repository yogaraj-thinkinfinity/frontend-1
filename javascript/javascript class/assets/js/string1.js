let my_name = "shibina";

my_name.length  // number of letters
typeof my_name  // gives type of data. 'string'
's'.toUpperCase()   // converts string to capital letters
my_name.toLowerCase()   // converts string to lower case

//join two strings
"hello " + "world"
"hello ".concat("world")

//  get part of a string
my_name[0]
my_name.slice(1,4)  // .slice(startIndex,endIndex)  -   slices the string starting from startIndex till endIndex without including the endIndex
my_name.slice(2)    // slices from index 2till end of string since, end index is not given
my_name.slice(-3)   // slice from the end of the string. as the place value startsfrom -1 from the ending. Place values starts from 0 from the begining

// get index value using letter
my_name.indexOf('i')
my_name.lastIndexOf('i')    // returns last index value

// get letter using index value
my_name[5]

my_name.startsWith('s')
my_name.endsWith('e')

my_name.padStart(12,'$');   // .padStart(output_length, fill)   , fills all the empty space in the begining
my_name.padEnd(14,'#')  //.padEnd(output_length, fill)   , fills all the empty space in the ending
// naming conversion
// correct patterns
// myname
// my_name 
// myName
// myname1
// my_name_1
// myName1_1
// m1y_name

// incorrect patterns
// Myname
// MyName
// My_name  - should npt start with capital letters. Use it anywhere in between.
// my-name
// my@#^name    - any symbol other than underscore should be avoided.
// 1myname  - should not start with numbers. You can use it anywhere in between.