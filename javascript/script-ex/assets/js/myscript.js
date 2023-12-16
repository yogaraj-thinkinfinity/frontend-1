try{
    let number=prompt('enter a number')
    if(number==''){
        throw 'cannot be empty'
    }
    if(isNaN(number)){
        throw 'enter a valid number'
    }
    else{
    console.log(number*2)
    }
}

catch(error){
    console.log('error message '+ error)
}

//json
 
// userData={
//     'name':'karthik',
//     "age":35,
//     'position':'developer'
// }
// let newData=JSON.parse(userData)
// console.log(newData)
