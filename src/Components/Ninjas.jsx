
// export const Ninjas = ({Name,Age,Belt}) => {
    // console.log({Name})
    import { v4 as uuidv4 } from 'uuid';
    export const Ninjas = ({tar}) => {
const ninjaList=tar.map(ninja=>{
    
    
    return(
    
         <div className="ninja" id={uuidv4()}>
        <div>Name:{ninja.Name}</div>
        <div>Age:{ninja.Age}</div>
        <div>Belt:{ninja.Belt}</div>
    </div>

    )       
      
   
})


return(

    // <div className="ninja">
    //     <div>Name:{Name}</div>
    //     <div>Age:{Age}</div>
    //     <div>Belt:{Belt}</div>
    // </div>
    <div className="ninja">
        {ninjaList}
    </div>
)
    
};
