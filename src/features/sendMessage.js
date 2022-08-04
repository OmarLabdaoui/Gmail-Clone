import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    sendmessage: false,
    selectedMail:null
}

const sendMessageSlice = createSlice({
    name: "sendMessage",
    initialState,
    reducers:{
        slectMail:(state,action) =>{
           state.selectedMail=action.payload
        },
      Openthesend:(state,action) =>{
       state.sendmessage=true
      },
      Closesend:(state,action)=>{
        state.sendmessage=false

      }
    }
})
export default sendMessageSlice.reducer;
export const {Openthesend,Closesend,slectMail}=sendMessageSlice.actions
export const selectsendmessage = (state)=>state.sendMessage.sendmessage
export const selectedMail = (state)=>state.sendMessage.selectedMail