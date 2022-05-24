import React, { useState } from 'react'
// import styledComponents from 'styled-components'

import styled from 'styled-components' ;
 const List = () => {
const [col1,setcol1]=useState("white")
const [col2,setcol2]=useState("white")
const [col3,setcol3]=useState("white")

const Button=styled.button`
background-color: green;
font-size: large;
`
const handlecolor=(state)=>{
if(state === "1"){
  setcol1("red")
}

if(state === "2"){
  setcol2("red")
}

if(state === "3"){
  setcol3("red")
}
}
  return (
    <div>
      <Button>hii</Button>
      <button onClick={()=>{handlecolor("1")}}  style={{background:col1}}>1</button>
      <button onClick={()=>{handlecolor("2")}}  style={{background:col2}}>2</button>
      <button onClick={()=>{handlecolor("3")}}  style={{background:col3}}>3</button>
    </div>
  )
}

export default List
