import { useRef } from "react";
import Image from "next/image";
import styles from "../styles/Homepage.module.css";
import { useState } from "react";
import ChatItem from "../components/ChatItem";

import { ArrowBackRounded, Chat, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import Content from "../components/Content";
import Conversation from "../components/Conversation";
import NewChat from "../components/NewChat";
import { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addConversations, addConversation, addMessage, deleteMessage } from "../redux/conversationsSlice";

import {io} from "socket.io-client"

const Homepage = ({user}) => {
    //const [chatList, setChatList] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [newChat, setNewChat] = useState(false);
    const [friends, setFriends] = useState([]);
    const [index, setIndex] = useState(-1);
    const [arrivalMessage, setArrivalMessage] = useState({});
    const socket = useRef();

    const dispatch = useDispatch();
    const chatList = useSelector(state=>state.conversations);

    useEffect(() => {
        socket.current = io("ws://localhost:5001");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                conversation_id: data.conversation_id,
                message: data.message,
            })
        })
    }, []);

    useEffect(()=>{
        if(user){
            socket.current.emit("addParticipant", user.id);
            const getConversations = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/conversationsAll/${user.id}`);
                    //setChatList(res.data);
                    dispatch(addConversations(res.data));
                } catch(err) {}
            }
            getConversations();
        }
    }, [user]);

    useEffect(() => {
        if(arrivalMessage.conversation_id){
            let count = 0;
            let found = false;
            while(count < chatList.userChats.length && found === false){
                if(chatList.userChats[count].chat.id === arrivalMessage.conversation_id){
                    found = true;
                    dispatch(addMessage({ index: count, message: arrivalMessage.message}));
                } else {
                    count++;
                }
            }
        }
    }, [arrivalMessage])

    const setActiveIndex = (e) => {
        if(e !== index){
            setIndex(e);
            setCurrentChat(chatList.userChats[e].chat);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <NewChat
                    friends={friends}
                    user={user}
                    show={newChat}
                    setShow={setNewChat}
                />
                <div className={styles.header}>
                    <div className={styles.userSpace}>
                        <div className={styles.userImage}>
                            <Image 
                                src="/img/tabosa.jpg"
                                objectFit="cover"
                                layout="fill"
                                alt=""
                            />
                        </div>
                        <span className={styles.username}>{user.username}</span>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.button}>
                            <DonutLarge />
                        </div>
                        <div className={styles.button} onClick={()=>setNewChat(true)}>
                            <Chat />
                        </div>
                        <div className={styles.button}>
                            <MoreVert />
                        </div>
                    </div>
                </div>
                <div className={styles.search}>
                    <div className={styles.totalAreaInput}>
                        <Search fontSize="small" style={{color: '#919191'}} />
                        <input type="search" placeholder="Pesquisar ou come??ar uma nova conversa" />
                    </div>
                </div>
                <div className={styles.chatList} style={{
                    display: chatList.length === 0 && "flex",
                    flexDirection: chatList.length === 0 && "column",
                    alignItems: chatList.length === 0 && "center",
                    color: chatList.length === 0 && "white"
                }}>
                    {
                        chatList.userChats.length>0 ?
                        chatList.userChats.map((c, index)=>(
                            <ChatItem
                                key={index}
                                informations={c}
                                user={user}
                                activated={currentChat.id === chatList.userChats[index].chat.id}
                                onClick={()=>setActiveIndex(index)}
                            />
                        )) :
                        "Nenhuma conversa ativa"
                    }
                </div>
            </div>
            <div className={styles.content}>
                {
                    currentChat.id !== undefined ?
                    <Conversation 
                        user={user} 
                        conversation={currentChat} 
                        index={index}
                        socket={socket}
                    /> :
                    <Content />
                }
            </div>
        </div>
    );
}

export default Homepage;