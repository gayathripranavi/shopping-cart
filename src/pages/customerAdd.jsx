import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer as addCustomerAction } from "../slices/customerSlice";
export default function CustomerAdd()
{
   const[input,setInput]=useState();
   const dispatch=useDispatch();
   const addCustomer=()=>{
    if(input){
        dispatch(addCustomerAction(input))
        setInput('');
    }
   }
    return(
        <>
        <div>
        <h2>Add customer</h2>
        <input type="text" name="cname" value={input} onChange={(e)=>setInput(e.target.value)}></input>
<button onClick={addCustomer}>ADD</button>
        </div>
        </>
    );
}