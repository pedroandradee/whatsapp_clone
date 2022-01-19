import { useEffect, useState } from "react";
import styles from "../styles/Messengerbar.module.css";
import { Search } from "@material-ui/icons";
import MessageDemo from "./MessageDemo";

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
    
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [inputFilter, setInputFilter] = useState("");
    const [selected, setSelected] = useState(-1);

    useEffect(()=>{
        if(conversations.length > 0){
            setFilteredMessages(conversations);
        }
    }, [conversations])

    const handleClick = (e) => {
        //console.log(e);
        setSelected(e);
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
                        <div className={styles.message} key={m.id} onClick={(e)=>handleClick(m.chat.id)}>
                            <MessageDemo message={m} selectedId={selected} user={user} />
                            {
                                (index < filteredMessages?.length - 1) &&
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