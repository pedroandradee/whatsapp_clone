import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Conversation.module.css";
import Message from "./Message";
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search, Send, Gif, Close } from "@material-ui/icons";
import { useRef } from "react";
import axios from "axios";
import {io} from "socket.io-client"
import EmojiPicker from "emoji-picker-react";

import { useDispatch } from "react-redux";
import { addMessage, deleteMessage } from "../redux/conversationsSlice";

const Conversation = ({conversation, user, index}) => {

    const scrollRef = useRef();
    const [newMessage, setNewMessage] = useState("");
    //const socket = useRef();
    const [chat, setChat] = useState([]);
    const [messages, setMessages] = useState([]);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(conversation){
            setChat(conversation);
            setMessages(conversation.messages);
        }
    }, [conversation]);

    /*useEffect(()=>{
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
    }, [chat, user, chat.participants]);*/


    useEffect(() =>{
        scrollRef.current?.scrollIntoView({behavior: "smooth" });
    }, [messages])

    const handleSendKey = async (e) => {
        if(e.keyCode === 13){
            handleSend(e);
        }
    }

    const handleMicClick = () => {

    }
    
    const handleSend = async (e) => {
        e.preventDefault();
        if(newMessage !== ""){
            const message = {
                conversation_id: chat.id,
                own_id: user.id,
                text: newMessage
            };
            try{
                const res = await axios.post("http://localhost:5000/api/messages", message);
                if(res.data.message){
                    const aux = {...res.data.message, own: {user: user}};
                    dispatch(addMessage({ index, message: {...aux} }));
                    setMessages((prev)=>[...prev, aux]);
                }
            } catch(err){
                console.log(err)
            }
            setNewMessage("");
            setShow(false);
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

    function getImage(){
        let equals = true;
        let image = "a";
        let count = 0;
        if(!chat.is_group){
            while(equals === true && count < chat?.participants?.length){
                if(chat.participants[count].user_id != user.id){
                    image = chat.participants[count].user.profile_picture;
                    equals = false;
                }
                count++;
            }
        } else {
            image = chat.group_image;
        }
        return image;
    }

    const handleEmojiClick = (e, emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
    }

    async function deleteMsg(indexMessage, id){
        console.log("deletando");
        try{
            const res = await axios.delete(`http://localhost:5000/api/messages/${id}`);
            if(res.data.Status === "Mensagem apagada"){
                dispatch(deleteMessage({ index, indexMessage }));
            }
        } catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image 
                        src={"/img/" + getImage()} 
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
                        {messages?.map((m, indexM)=>(
                            <div key={indexM} ref={scrollRef}>
                                {
                                    <Message 
                                        message={m} 
                                        own={m.own_id === user?.id} 
                                        user={user} 
                                        indexConversa={index}
                                        indexMessage={indexM} 
                                        deleteMsg={deleteMsg}
                                    />
                                }
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
                                onKeyUp={handleSendKey}
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