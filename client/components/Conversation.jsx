import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Conversation.module.css";
import Message from "./Message";
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search, Send, Gif, Close } from "@material-ui/icons";
import { useRef } from "react";
import axios from "axios";
import {io} from "socket.io-client"
import EmojiPicker from "emoji-picker-react";

const Conversation = ({conversation, user}) => {

    const scrollRef = useRef();
    const [newMessage, setNewMessage] = useState("");
    const socket = useRef();
    const [chat, setChat] = useState([]);
    const [messages, setMessages] = useState([
        {
            id: 1,
            own_id: 1,
            text: "alçsdkgçlsadghaçsdlgahçdlsghsdçlgajhdçljdhgasdçgjahdsjghasdasdasdasdasdads",
            img: true,
            created_at: new Date(),
            own: {
                id: 1,
                user: {
                    id: 1,
                    username: "Nome1"
                }
            }
        },
        {
            id: 2,
            own_id: 2,
            text: "testando321!",
            img: true,
            created_at: new Date(),
            own: {
                id: 2,
                user: {
                    id: 2,
                    username: "Nome2"
                }
            }
        },
    ]);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(conversation){
            const getConversation = async () => {
                const res = await axios.get(`http://localhost:5000/api/conversations/${conversation}`);
                if(res.data.Status === "Conversa encontrada!"){
                    setChat(res.data.conversation);
                    setMessages(res.data.conversation.messages);
                }
            }
            getConversation();
        }
    }, [conversation]);

    useEffect(()=>{
        socket.current = io("ws://localhost:5001");
    }, [user]);

    useEffect(() => {
        socket.current.on("getMessage", data => {
            setMessages((prev)=>[...prev, data.message])
        })
    }, [])

    useEffect(() => {
        if(chat && user){
            if(chat?.participants?.length > 0){
                const uid = chat.participants.find(p=>p.user_id === user.id);
                socket.current.emit("addParticipant", uid.id);
            }
        }
    }, [chat, user, chat.participants]);


    useEffect(() =>{
        scrollRef.current?.scrollIntoView({behavior: "smooth" });
    }, [chat.messages])

    const handleSendKey = async (e) => {
        if(e.key === "Enter"){
            setNewMessage("");
        }
    }

    const handleMicClick = () => {

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
                //console.log(res.data.message);
                const aux = {...res.data.message, own: {user: user}};

                //const receiverId = chat.participants.find(member => member.user.id !== user.id);
                const uid = chat.participants.find(p=>p.user_id === user.id);

                socket.current.emit("sendMessage", {
                    senderId: uid.id,
                    receivers: chat.participants,
                    message: aux,
                });
                //const aux2 = [...chat.messages, aux];
                setMessages((prev)=>[...prev, aux]);
                //setChat({...chat, messages: aux2});
            }
            setNewMessage("");
        } catch(err){
            console.log(err)
        }
    }

    function getFriendName(participants){
        let equals = true;
        let name = "Name";
        let count = 0;
        if(participants){
            while(equals === true && count < participants.length){
                if(participants[count].user_id != user.id){
                    name = participants[count].user.username;
                    equals = false;
                }
                count++;
            }
        }
        return name
    }

    const handleEmojiClick = (e, emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
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
                    {
                        chat &&
                        <>
                            <div className={styles.friendData}>
                                <span className={styles.username}>{chat.is_group ? chat.group_name : getFriendName(chat.participants)}</span>
                                <span className={styles.lastView}>visto por último hoje às 9:33 AM</span>
                            </div>
                            <div className={styles.icons}>
                                <Search />
                                <MoreVert />
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.chatWrapper}>
                    <div className={styles.chatTop}>
                        {messages?.map(m=>(
                            <div key={m.id} ref={scrollRef}>
                                {<Message message={m} own={m.own_id === user?.id} user={user} />}
                            </div>
                        ))}
                    </div>
                    <div 
                        className={styles.emojisContainer} 
                        style={{height: show ? '200px' : '0px'}}
                    >
                        <EmojiPicker
                            onEmojiClick={handleEmojiClick}
                            disableSearchBar
                            disableSkinTonePicker
                        />
                    </div>
                    <div className={styles.chatBottom}>
                        <div 
                            className={styles.chatBottomLeft}
                            style={{width: show ? "140px" : "80px"}}
                        >
                            {   show &&
                                <div className={styles.btn} onClick={() => setShow(false)}>
                                    <Close />
                                </div>
                            }
                            <div className={styles.btn} onClick={() => setShow(true)}>
                                <InsertEmoticon style={{color: show ? "#009688" : "#a3a3a3"}} />
                            </div>
                            {
                                show &&
                                <div className={styles.btn}>
                                    <Gif />
                                </div>
                            }
                            <div className={styles.btn}>
                                <AttachFile />
                            </div>
                        </div>
                        <div 
                            className={styles.chatBottomMiddle}   
                        >
                            <input
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
                                <Mic onClick={handleMicClick} /> :
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