import Messengerbar from "./Messengerbar";
import Userbar from "./Userbar";
import styles from "../styles/Sidebar.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Sidebar = ({click, user}) => {
    const [conversations, setConversations] = useState([]);

    function click2(msg){
        click(msg);
    }


    useEffect(()=>{
        if(user){
            const getMessages = async () => {
                const res = await axios.get(`http://localhost:5000/api/conversationsAll/${user.id}`);
                setConversations(res.data);
            }
            getMessages();
        }
    }, [user])

    return(
        <div className={styles.container}>
            <Userbar user={user} />
            <Messengerbar click2={click2} conversations={conversations} user={user} />
        </div>
    );
}

export default Sidebar;