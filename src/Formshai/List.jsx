import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const List = () => {
    const[dekhe,setDekhe]=useState([])
    const navi=useNavigate()
    useEffect(()=>{
getData();
    },[])
    const getData=()=>{
        axios.get("http://localhost:2101/Todos").then((res)=>{
            setDekhe(res.data)
            console.log(dekhe)
        })
       
    }
  return (
    <div>
      {dekhe.map((e)=>{
          return<div onClick={()=>{
              navi(`/list/${e.id}`)
          }}>{e.task}</div>
      })}
    </div>
  )
}

export default List
