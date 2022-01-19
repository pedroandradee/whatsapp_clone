import { useState } from "react";
import styles from "../styles/MessageDemo.module.css";
import Image from "next/image";

import { format, register } from 'timeago.js';
import { useEffect } from "react";

const MessageDemo = ({message, selectedId, user}) => {

    const [selected, setSelected] = useState(selectedId);

    /*useEffect(() => {
        if(message && user){
            if(chat?.participants?.length > 0){
                const uid = message.chat.participants.find(p=>p.user_id === user.id);
                socket.current.emit("addParticipant", uid.id);
            }
        }
    }, [message, user]);*/

    useEffect(()=>{
        setSelected(selectedId);
    });

    const localeFunc = (number, index, totalSec) => {
        // number: the timeago / timein number;
        // index: the index of array below;
        // totalSec: total seconds between date to be formatted and today's date;
        return [
            ["agora mesmo", "neste momento"],
            ["%s segundos atras", "há %s segundos"],
            ["1 minuto atras", "há um minuto"],
            ["%s minutos atras", "há %s minutos"],
            ["uma hora atras", "há uma hota"],
            ["%s horas atras", "há %s horas"],
            ["um dia atras", "há um dia"],
            ["%s dias atras", "há %s dias"],
            ["um mes atras", "há um mês"],
            ["%s meses atras", "há %s meses"],
            ["1 ano atras", "há 1 ano"],
            ["%s anos atras", "há %s anos"]
        ][index];
      };

    register('my-locale', localeFunc);

    function getFriendName(message){
        let equals = true;
        let name = "Name";
        let count = 0;
        if(!message.chat.is_group){
            while(equals === true && count < message.chat.participants.length){
                if(message.chat.participants[count].user_id != user.id){
                    name = message.chat.participants[count].user.username;
                    equals = false;
                }
                count++;
            }
        } else {
            name = message.chat.group_name;
        }
        return name
    }

    return (
        <div className={(selected === message.chat.id) ? styles.messageContainerSelected : styles.messageContainer}>
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
                    <span className={styles.username}>{getFriendName(message)}</span>
                    {
                        message.chat.messages?.length > 0 &&
                        <span className={styles.userMessage}>{message.chat.messages[message.chat.messages.length - 1].text}</span>
                    }
                </div>
                <div className={styles.release}>
                    <span className={styles.relData}>{format(message.chat.messages[message.chat.messages.length - 1].created_at, 'my-locale')}</span>
                </div>
            </div>
        </div>
    )
}

export default MessageDemo
