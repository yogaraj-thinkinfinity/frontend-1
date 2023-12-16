import React from "react";
class Purecomp extends React.PureComponent{
     state={
        count:0
     }
     incre=()=>{
        this.setState({count:this.state.count+1})
     }
     render(){
         return(
            <>
            <div>count:{this.state.count}</div>
            <button onClick={this.incre}>+</button>
            </>
         )
     }
}
export default Purecomp;