import React, { useState } from 'react'

const Input = ({addTodo}) => {
    const[todo,setTodo]=useState({
      Name:"",
      State:"",
      Rupees:""
    })
    const handleChange=(e)=>{
      const{id,value}=e.target;
      setTodo({...todo,[id]:value})
      console.log(todo)
    }
    const handleSave=(e)=>{
        e.preventDefault()
     addTodo(todo)
     setTodo({ Name:"",
     State:"",
     Rupees:""})

    }
  return (
    <div style={{backgroundColor:"grey"}}>
      <form onSubmit={handleSave}>
          <input onChange={handleChange} value={todo.Name} type="text"  id="Name"placeholder='Add todo'/>
          <br />
        <label htmlFor="State"> State : </label> <select name="State" value={todo.State} onChange={handleChange} id="State">
        <option value="">----</option>
             <option value="done">Done</option>
             <option value="pending">Pending</option>
             <option value="process">Processing</option>
         </select>
         <br />
         <input onChange={handleChange} value={todo.Rupees} type="Number" id='Rupees' placeholder='Enter amount' />
         <br />
         <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Input
