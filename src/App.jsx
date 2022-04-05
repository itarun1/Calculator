import './App.css';
import { Ninjas } from './Components/Ninjas';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddNinja } from './Components/AddNinja';
import { Calculator } from './Components/Calc';
function App() {
  const[tar,setTar]=useState([
    {Name:"Dev" ,Age:"30" ,Belt:"Black"},
    {Name:"Rav" ,Age:"30" ,Belt:"Black"},
    {Name:"Samon" ,Age:"30" ,Belt:"Black"},
    {Name:"Bear" ,Age:"30" ,Belt:"Black"},
  ])
  // console.log(tar)
//  const s={tar.map((e)=>{

//     {e.Name}.{e.Age}.{e.Belt}
    
 
//    })}
  return (
    <div className="App">
      <Calculator/>
      {/* <Ninjas tar={tar}/> */}
      {/* {tar.map((elem)=>{ return <Ninjas key={uuidv4()} Name={elem.Name} Age={elem.Age} Belt={elem.Belt}/>
      })} */}
      {/* <AddNinja/> */}
    

    </div>
  );
}

export default App;
