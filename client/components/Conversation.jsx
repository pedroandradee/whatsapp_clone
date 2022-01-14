import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Conversation.module.css";
import Message from "./Message";
import { AttachFile, EmojiEmotions, Mic, MoreVert, Search, Send } from "@material-ui/icons";
import { useRef } from "react";
import axios from "axios";
import {io} from "socket.io-client"

const Conversation = ({conversation, user}) => {

    const scrollRef = useRef();
    const [newMessage, setNewMessage] = useState("");
    const [participants, setParticipants] = useState("");
    const socket = useRef();
    const [chat, setChat] = useState([]);
    const [receiversId, setReceiversId] = useState([]);

    useEffect(()=>{
        if(conversation){
            const getConversation = async () => {
                const res = await axios.get(`http://localhost:5000/api/conversations/${conversation}`);
                if(res.data.Status === "Conversa encontrada!"){
                    setChat(res.data.conversation);
                }
            }
            getConversation();
        }
    }, [conversation]);

    useEffect(() => {
        socket.current = io("ws://localhost:5001");
        console.log("opa");
        socket.current.on("getMessage", data => {
            const aux = [...chat.messages, data.message];
            setChat({...chat, messages: aux});
        })
    }, [])

    useEffect(() => {
        socket.current.emit("addUser", user.id);
    }, [user]);


    useEffect(() =>{
        scrollRef.current?.scrollIntoView({behavior: "smooth" });
    }, [chat.messages])

    const handleSendKey = async (e) => {
        if(e.key === "Enter"){
            setNewMessage("");
        }
    }
    
    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            conversation_id: conversation,
            own_id: user.id,
            text: newMessage
        };

        
        try{
            const res = await axios.post("http://localhost:5000/api/messages", message);
            if(res.data.message){
                const aux = {...message, own: {user: user}};

                const receiverId = chat.participants.find(member => member.user.id !== user.id);

                console.log(receiverId);

                socket.current.emit("sendMessage", {
                    senderId: user.id,
                    receiverId: receiverId.user.id,
                    message: aux,
                });
                const aux2 = [...chat.messages, aux];
                setChat({...chat, messages: aux2});
            }
            setNewMessage("");
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="/img/tabosa.jpg" 
                        alt="" 
                        layout="fill" 
                        objectFit="cover"
                    />
                </div>
                <div className={styles.friendInfo}>
                    <div className={styles.friendData}>
                        <span className={styles.username}>{participants || "Demontiê Alavanquê"}</span>
                        <span className={styles.lastView}>visto por último hoje às 9:33 AM</span>
                    </div>
                    <div className={styles.icons}>
                        <Search />
                        <MoreVert />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.chatWrapper}>
                    <div className={styles.chatTop}>
                        {chat?.messages?.map(m=>(
                            <div key={m.id} ref={scrollRef}>
                                {<Message message={m} own={m.own_id === user?.id} />}
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatBottom}>
                        <div className={styles.chatBottomLeft}>
                            <EmojiEmotions />
                            <AttachFile />
                        </div>
                        <div className={styles.chatBottomMiddle}>
                            <textarea
                                className={styles.chatInput}
                                placeholder="Digite uma mensagem"
                                onChange={(e)=>setNewMessage(e.target.value)}
                                onKeyPressCapture={(e)=>handleSendKey(e)}
                                value={newMessage}
                            />
                        </div>
                        <div className={styles.chatBottomRight}>
                            {
                                newMessage === "" ?
                                <Mic /> :
                                <Send onClick={handleSend} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conversation;