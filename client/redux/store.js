import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import conversationsReducer from "./conversationsSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        conversations: conversationsReducer,
    },
});