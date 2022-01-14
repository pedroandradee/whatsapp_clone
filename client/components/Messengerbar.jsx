import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Messengerbar.module.css";
import { Search } from "@material-ui/icons";
import { format, render, cancel, register } from 'timeago.js';

const Messengerbar = ({click2, conversations, user}) => {

    /*const [messages, setMessages] = useState([
        {
            id: 0,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Coxinha",
            message: "teste0",
            created_at: "10:30 AM"
        },
        {
            id: 1,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Doquinha",
            message: "teste1",
            created_at: "10:30 AM"
        },
        {
            id: 2,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Calango azul",
            message: "teste2",
            created_at: "10:30 AM"
        },
        {
            id: 3,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Sarrabui",
            message: "teste3",
            created_at: "10:30 AM"
        },
        {
            id: 4,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Seu antoin",
            message: "teste4",
            created_at: "10:30 AM"
        },
        {
            id: 5,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Demontiê Alavanquê",
            message: "teste5",
            created_at: "10:30 AM"
        },
        {
            id: 6,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Teste",
            message: "teste6",
            created_at: "10:30 AM"
        },
        {
            id: 7,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Teste",
            message: "testando a parte de quebra de palavra",
            created_at: "10:30 AM"
        },
        {
            id: 8,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Teste",
            message: "teste8",
            created_at: "10:30 AM"
        },
        {
            id: 9,
            user_id: 1,
            user_img: "/img/tabosa.jpg",
            user_name: "Teste",
            message: "teste9",
            created_at: "10:30 AM"
        },
    ]);*/

    const[filteredMessages, setFilteredMessages] = useState([]);

    const [inputFilter, setInputFilter] = useState("");

    useEffect(()=>{
        if(conversations.length > 0){
            setFilteredMessages(conversations);
        }
        console.log(conversations);
    }, [conversations])

    const handleClick = (e) => {
        //console.log(e);
        click2(e);
    }

    const handleChange = (e) => {
        setInputFilter(e);
        if(conversations.length > 0){
            if(e !== ""){
                let arr = [];
                for(let i=0;i<conversations.length;i++){
                    let aux = 0;
                    let found = false;
                    while(aux < conversations[i].participants.length && found === false){
                        if(conversations[i].participants[aux].user.username.toUpperCase().includes(e.toUpperCase())){
                            found = true;
                            arr.push(conversations[i]);
                        }
                        aux++;
                    }
                }
                setFilteredMessages(arr);
            } else {
                setFilteredMessages(conversations);
            }
        }
    }

    function getFriendName(message){
        let equals = true;
        let name = "Name";
        let count = 0;
        /*while(equals === true && count < message.messages.length){
            if(message.messages[count].own.id !== user.id){
                name = message.messages[count].own.user.username;
                equals = false;
            }
            count++;
        }*/
        while(equals === true && count < message.participants.length){
            if(message.participants[count].user_id != user.id){
                name = message.participants[count].user.username;
                equals = false;
            }
            count++;
        }
        return name
    }

    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.barContainer}>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <Search />
                        </div>
                    </div>
                    <input value={inputFilter} className={styles.input} placeholder="Pesquisar ou iniciar uma nova conversa" onChange={(e) => handleChange(e.target.value)} />
                </div>
            </div>
            <div className={styles.wrapper}>
                {
                    filteredMessages.map((m, index)=>(
                        <div className={styles.message} key={m.id} onClick={(e)=>handleClick(m.id)}>
                            <div className={styles.messageContainer}>
                                <div className={styles.img}>
                                    {/*<Image 
                                        src={m.messages[m.messages.length - 1].own.user.profile_picture}
                                        objectFit="cover"
                                        layout="fill"
                                        alt=""
                                    />*/}
                                    <Image 
                                        src="/img/tabosa.jpg"
                                        objectFit="cover"
                                        layout="fill"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.datas}>
                                    <div className={styles.content}>
                                        {/*<span className={styles.username}>{m.messages[m.messages.length - 1].own.user.username}</span>*/}
                                        <span className={styles.username}>{getFriendName(m)}</span>
                                        {
                                            m.messages?.length > 0 &&
                                            <span className={styles.userMessage}>{m.messages[m.messages.length - 1].text}</span>
                                        }
                                    </div>
                                    <div className={styles.release}>
                                        <span className={styles.relData}>{format(m.messages[m.messages.length - 1].created_at, 'pt_BR')}</span>
                                    </div>
                                </div>
                            </div>
                            {
                                (index < filteredMessages.length - 1) &&
                                <div className={styles.hr}></div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Messengerbar;