import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        id: -1,
        username: "",
        profile_picture: "",
    },
    reducers: {
        login: (state, action)=>{
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.profile_picture = action.payload.profile_picture;
        },
        logout: (state) => {
            state.id = -1;
            state.username = "";
            state.profile_picture = "";
        }
    }
});

export const { login, reset } = userSlice.actions;
export default userSlice.reducer;