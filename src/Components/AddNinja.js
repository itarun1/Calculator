import { useState } from "react"
export const AddNinja = () => {
    const[tar,setTar]=useState([
       {Name:null,
        Age:null,
        Belt:null
    }
      ])
  const handleChange=(e)=>{
   setTar({
       [e.target.id]:e.target.value
    } )
  }
  const handleSubmit=(e)=>{
 e.preventDefault();
//  setTar(...tar,e)
  console.log(tar)
  }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input type="text" id="Name" onChange={handleChange}/>
                <label htmlFor="Age">Age:</label>
                <input type="number" id="Age" onChange={handleChange}/>
                <label htmlFor="Belt">Belt:</label>
                <input type="text" id="Belt" onChange={handleChange}/>
                <input type="Submit" value="Submit"/>
            </form>
        </div>
    )


}
