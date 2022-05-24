import React, { useState } from 'react'
import Arr from './Arr'
import Input from './Input'


const Todo = () => {
    const [todos,setTodos]=useState([])
    const addTodo=(data)=>{
        setTodos([...todos,data])
    }
  return (
    <div>
    <Input addTodo={addTodo}/>
    {todos.map((e)=>{
   return  <Arr val={e}/> 
    })}
    
    </div>
  )
}

export default Todo
