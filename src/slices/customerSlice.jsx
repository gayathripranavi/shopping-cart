import { createSlice } from "@reduxjs/toolkit";
const initialState=[];

const customerSlice1=createSlice({
    name:'customers',
    initialState,
    reducers:{
        addCustomer(state,action)
        {
            state.push(action.payload);
        },
        deleteCustomer(state,action)
        {
            const deleteIndex=action.payload;
            return state.filter((val,index)=>index!==deleteIndex)
        }
    }
})
export const {addCustomer,deleteCustomer}=customerSlice1.actions;
export default customerSlice1.reducer
