import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Conversation from "../components/Conversation";
import styles from "../styles/Homepage.module.css";
import { useState } from "react";

const Homepage = ({user}) => {
    const [conversation, setConversation] = useState(-1);
    /*const user = {
        "id": 2,
        "username": "administrador2",
        "profile_picture": "noAvatar.png",
    }
    const user = {
        "id": 1,
        "username": "Administrador",
        "profile_picture": "noAvatar.png"
    }*/

    return(
        <div className={styles.container}>
            <Sidebar click={setConversation} user={user} />
            {
                conversation === -1 ?
                <Content /> :
                <Conversation conversation={conversation} user={user} />
            }
        </div>
    );
}

export default Homepage;