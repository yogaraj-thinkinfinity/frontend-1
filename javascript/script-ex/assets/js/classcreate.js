class myclass{
      constructor (name,age){
          this.name=name
          this.age=age
      }
      details(){
          console.log("Hi" + this.name +"," + "Your age is" +this.age)
      }
  }
  let firstperson=new myclass("vijay",21)
  
  firstperson.details()