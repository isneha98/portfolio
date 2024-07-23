import { useState } from "react";
// let myn;    
// function MyName(){
//     // const [mynamex, myf]= useState("name");
  
//  return(
//   <p>hey{myn}</p>
//  );
// }
function MyInput(props){
    // const [myn, setName]= useState("name");
    // function lw(e){
    //     console.log(e.target.value);
    //     let myn = e.target.value;
    //     setName(myn);
    //   }
  return(
        <div>
            {/* <p>hey {myn}</p> */}
            <input 
            type={props.mytype} 
            name={props.myname} 
            placeholder={props.myplaceholder} 
            onChange={props.onchange}
            value={props.value}
            />
      </div>
  );
}
export default myn ;
export {MyInput , MyName};