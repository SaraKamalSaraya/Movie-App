import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data: [],
}

const WatchListData  = createSlice({
    name:"WatchListData",
    initialState:INITIAL_STATE,
    reducers:{
        AddToWatchList:(state,action)=>{
            const newItem = action.payload
            // state.data.push(newItem);
            const existingItem = state.data.find(item => item.id === newItem.id);
        if (existingItem) {
            state.data = state.data.filter(item => item.id !== newItem.id);
        } else { 
          state.data.push(newItem);
        }
        }
    }
})
    
export const {AddToWatchList} = WatchListData.actions;

export default  WatchListData.reducer;



