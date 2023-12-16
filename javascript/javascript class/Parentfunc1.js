import { useState } from "react";
import Childfunc from "./Childfunc";
const Parentfunc =()=>{
    const [count,setsate]=useState(0)
    const [data,setstate2]=useState('')
    const  incre=()=>{
        setsate(count+1)
      }
    
    const  datafromchild=(childdata)=>{
      setstate2(childdata)
      }
    return(
        <>

        <div>parentcount:{count}
      <button onClick={incre}>+</button></div>
        {data}
        <>-----------------------</>
        <Childfunc data={'hello'} datafrom={datafromchild}/>
        </>
    )
}
export default Parentfunc;