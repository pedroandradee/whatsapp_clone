import Image from "next/image";
import styles from "../styles/Homepage.module.css";
import { useState } from "react";
import ChatItem from "../components/ChatItem";

import { ArrowBackRounded, Chat, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import Content from "../components/Content";
import Conversation from "../components/Conversation";
import NewChat from "../components/NewChat";

const Homepage = ({user}) => {
    const [chatList, setChatList] = useState([
        {
            id: 0,
            img: "/img/tabosa.jpg",
            chatName: "Sarrabui",
            lastMsg: "Essa mensagem é um teste"
        },
        {
            id: 1,
            img: "/img/tabosa.jpg",
            chatName: "Admins",
            lastMsg: "Essa mensagem é um teste2"
        },
    ]);
    const [currentChat, setCurrentChat] = useState({});
    const [newChat, setNewChat] = useState(false);
    const [friends, setFriends] = useState([
        {
            id: 1,
            img: "/img/tabosa.jpg",
            username: "Sarrabui",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
        {
            id: 2,
            img: "/img/tabosa.jpg",
            username: "Seu Antoin",
        },
    ]);

    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div 
                    className={styles.newChat}
                    style={{left: newChat ? 0 : -500}}
                >
                    <div className={styles.newChatContent}>
                        <div className={styles.top}>
                            <div className={styles.topContainer}>
                                <div 
                                    className={styles.icon}
                                    onClick={()=>setNewChat(false)} 
                                >
                                    <ArrowBackRounded />
                                </div>
                                <span className={styles.topText}>Nova conversa</span>
                            </div>
                        </div>
                        <div className={styles.search}>
                            <div className={styles.totalAreaInput}>
                                <Search fontSize="small" style={{color: '#919191'}} />
                                <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
                            </div>
                        </div>
                        <NewChat />
                    </div>
                </div>
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
                        <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
                    </div>
                </div>
                <div className={styles.chatList}>
                    {
                        chatList.length>0 ?
                        chatList.map((c, index)=>(
                            <ChatItem
                                key={index}
                                informations={c}
                                activated={currentChat.id === chatList[index].id}
                                onClick={()=>setCurrentChat(chatList[index])}
                            />
                        )) :
                        "Nenhuma conversa ativa"
                    }
                </div>
            </div>
            <div className={styles.content}>
                {
                    currentChat.id !== undefined ?
                    <Conversation user={user} /> :
                    <Content />
                }
            </div>
        </div>
    );
}

export default Homepage;