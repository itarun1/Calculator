import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
const [todo,setTodo]=useState({
  task:"",
  date:"",
  place:""  
})
const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:2101/Todos",todo).then(()=>{
      alert("Todo Added Succesfully")
 
  setTodo({
    task:"",
    date:"",
    place:""  
  })
})

}
    const handleChange=(e)=>{
      const{id,value}=e.target;
      setTodo({...todo,[id]:value})
    //   console.log(todo)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" id='task' value={todo.task} onChange={handleChange} placeholder='Enter the task'/><br />
          <input type="date"  id='date' value={todo.date} onChange={handleChange} placeholder='Date of task' /><br />
          <input type="text"  id='place'value={todo.place}  onChange={handleChange} placeholder='Place' /><br />
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
