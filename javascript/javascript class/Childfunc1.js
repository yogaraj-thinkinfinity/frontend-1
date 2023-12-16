const Childfunc =(props)=>{
    const sendto=()=>{
    props.datafrom('bala')
    }
    return(
        
        <>
        <div>child</div>
        <div>{props.data}</div>
        <div><button onClick={sendto}>send</button></div>
        </>
    )
}
export default Childfunc;