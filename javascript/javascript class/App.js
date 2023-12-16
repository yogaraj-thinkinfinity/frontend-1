import React from 'react';
import Purecomp from './Purecomp';

class App extends React.Component{
   state={
    count:0,
   }
   increment=()=>{
    this.setState({count:this.state.count+1})
   }
  render(){
    return(
      <>
       <div>App Component :{this.state.count}</div>
         <div><button onClick={this.increment}>+</button></div>
           ___________________________________________________________
           <Purecomp/>
         </>
     
    )
  }
}
export default App;