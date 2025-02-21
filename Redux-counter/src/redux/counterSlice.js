import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState : initialState,
    reducers : {
        increment : (state,{type,payload})=>{
            state.count+=payload;
        },
        decrement : (state,action)=>{
            if (state.count>0){
                state.count = state.count - action.payload;
            }
        }
    }
})

export default counterSlice.reducer;
export const{increment,decrement} = counterSlice.actions;