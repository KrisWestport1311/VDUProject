import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart:(state) =>{
        state.loading=true
    },
    loginSuccess:(state, action) =>{  //if we have an user we are going to fire this
        state.loading=false; //as we are ending the loading/login
        state.currentUser = action.payload
    },
    loginFailure:(state) =>{ // if we have an error we are going to fire this function
        state.loading=false;
        state.error=true;
    },
    logout:(state)=>{
        return initialState;
    },
  },
});

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions

export default userSlice.reducer
