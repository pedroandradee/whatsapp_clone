import { createSlice } from "@reduxjs/toolkit";

const conversationsSlice = createSlice({
    name: "conversations",
    initialState:{
        userChats: []
    },
    reducers: {
        //precisa mandar todas as conversas
        addConversations: (state, action)=>{
            state.userChats = action.payload;
        },
        //precisa mandar a conversa
        addConversation: (state, action)=>{
            state.userChats.push(action.payload);
        },
        //precisa mandar o index
        deleteConversation: (state, action)=>{
            state.userChats.pop(action.payload.index);
        },
        //precisa mandar o index e a mensagem
        addMessage: (state, action)=>{
            state.userChats[action.payload.index].chat.messages.push(action.payload.message);
        },
        //precisa mandar o index da conversa e o index da mensagem
        deleteMessage: (state, action)=>{
            state.userChats[action.payload.index].chat.messages.pop(action.payload.indexMessage);
        }
    }
});

export const { addConversations, addConversation, deleteConversation, addMessage, deleteMessage } = conversationsSlice.actions;
export default conversationsSlice.reducer;