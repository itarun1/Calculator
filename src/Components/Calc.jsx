
import { useState } from "react"
import styledComponents from "styled-components"

export const Calculator=()=>{
    let [a,seta]=useState("")
 const Clicks=(e)=>{
   e.preventDefault()
    seta(a.concat(e.target.id))
//    console.log(e.target.id)
 }
 const Clear=()=>{
     seta("")
 }
 const Delete=()=>{
     seta(a.slice(0,a.length-1))
 }
 const Calc=()=>{
 seta(eval(a).toString())
 }
 const Daf=(g)=>{
    g.preventDefault()
    // console.log(g.target.id)
    seta(a.concat(g.target.id))
 }
    return(<div style={{border:"1px solid black",
    width:"300px",
    height:"400px", margin:"auto"}}>
        <h2>My Calculator</h2>
        <div style={{border:"1px solid black",
    width:"300px",
    height:"60px"}} id="data"> {a}</div>
    <div style={{border:"1px solid red", height:"66%"}}>
        <div style={{display:"flex",  height:"20%",width:"100%"}} >
         <div id="clear"  style={{ border:"1px solid green", height:"100%",width:"25%"}} onClick={Clear}>AC</div>
        <div id="delete"  style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Delete}>DELETE</div>
        <div id="equal"  style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Calc}>=</div>
        <div id="/" value="/" style={{ border:"1px solid green", height:"100%",width:"25%", backgroundColor:"tomato"}}onClick={Daf}>/</div>
        </div>
        <div style={{display:"flex",  height:"20%",width:"100%"}} >
         <div  id="7" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>7</div>
        <div  id="8" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>8</div>
        <div  id="9" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>9</div>
        <div  id="*"  value="*" style={{ border:"1px solid green", height:"100%",width:"25%", backgroundColor:"tomato"}}onClick={Daf}>*</div>
        </div>
        <div   style={{display:"flex",  height:"20%",width:"100%"}} >
         <div  id="4" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>4</div>
        <div  id="5" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>5</div>
        <div id="6"  style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>6</div>
        <div id="-"  value="-"  style={{ border:"1px solid green", height:"100%",width:"25%", backgroundColor:"tomato"}}onClick={Daf}>-</div>
        </div>
        <div style={{display:"flex",  height:"20%",width:"100%"}} >
         <div  id="1" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>1</div>
        <div  id="2" style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>2</div>
        <div id="3"  style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Clicks}>3</div>
        <div  id="+" value="+"  style={{ border:"1px solid green", height:"100%",width:"25%", backgroundColor:"tomato"}}onClick={Daf}>+</div>
        </div>
        <div   style={{display:"flex",  height:"20%",width:"100%"}} >
         <div id="0" style={{ border:"1px solid green", height:"100%",width:"50%"}}onClick={Clicks}>0</div>
        <div  id="."  value="."  style={{ border:"1px solid green", height:"100%",width:"25%"}}onClick={Daf}>.</div>
        <div  id="%"  value="%"  style={{ border:"1px solid green", height:"100%",width:"25%", backgroundColor:"tomato"}}onClick={Daf}>%</div>
        </div>
        
       
         </div>
        </div>)
        
  
}