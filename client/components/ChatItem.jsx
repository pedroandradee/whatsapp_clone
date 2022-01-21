import styles from "../styles/ChatItem.module.css"
import Image from "next/image"
import { useEffect } from "react";

const ChatItem = ({onClick, activated, informations, user}) => {

    function getFriendName(){
        let equals = true;
        let name = "Name";
        let count = 0;
        if(!informations?.chat.is_group){
            while(equals === true && count < informations?.chat?.participants?.length){
                if(informations.chat.participants[count].user_id != user.id){
                    name = informations.chat.participants[count].user.username;
                    equals = false;
                }
                count++;
            }
        } else {
            name = informations.chat.group_name;
        }
        return name
    }

    function getImage(){
        let equals = true;
        let image = "a";
        let count = 0;
        if(!informations?.chat.is_group){
            while(equals === true && count < informations?.chat?.participants?.length){
                if(informations.chat.participants[count].user_id != user.id){
                    image = informations.chat.participants[count].user.profile_picture;
                    equals = false;
                }
                count++;
            }
        } else {
            image = informations.chat.group_image;
        }
        return image;
    }

    return (
        <div 
            className={activated ? styles.containerActivated : styles.container}
            onClick={onClick}
        >
            <div className={styles.imageContainer}>
                <Image 
                    src={"/img/" + getImage()}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.username}>{getFriendName()}</div>
                    <div className={styles.sendDate}>15:04</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.lastMsg}>
                        <p>{informations?.chat?.messages[informations?.chat?.messages?.length - 1]?.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem
