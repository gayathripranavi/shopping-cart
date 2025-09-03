import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../slices/customerSlice";

export default function CustomerView()
{
    const customers=useSelector((state)=>state.customers);
    const dispatch=useDispatch();
    function deleteHandler(index)
    {
        dispatch(deleteCustomer(index))
    }
    return(
        <>
        <div>
            <h2>customer list</h2>
            <ul>
                {
                    customers.map((customer,index)=>
                    <li>{customer}
                    <button onClick={()=>deleteHandler(index)}>Delete</button>
                    </li>
                    )
                }
            </ul>
        </div>
        </>
    );
}