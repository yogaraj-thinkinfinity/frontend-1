class myclass{
      constructor (name,age){
          this.name=name
          this.age=age
      }
      get details(){
          return this.name
      }
      set changeName(x){
            return this.name=x
      }
  }
  let first=new myclass("vijay",21)
  
  console.log(first.details)
  first.changeName="sathish"
  console.log(first.details)