import styles from "../styles/Message.module.css";
import {format, register} from "timeago.js"
import Image from "next/image";

const Message = ({message, own, user}) => {

    console.log(message);
    console.log(user);
    
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

    return(
        <div className={own ? styles.messageOwn : styles.message}>
            <div className={own ? styles.messageContainerOwn : styles.messageContainer}>
                <div 
                    className={styles.messageTop}
                >
                    <span className={own ? styles.usernameOwn : styles.username}>{message.own.user.username}</span>
                    {
                        message.img &&
                        <div 
                            className={styles.wrapper}
                            style={{backgroundColor: own ? "#13503d" : "#252525"}}
                        >
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/tabosa.jpg" 
                                    alt="" 
                                    layout="fill" 
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    }
                    <p className={styles.messageText}>{message.text}</p>
                </div>
                <div className={styles.messageBottom}>{format(message.created_at, 'my-locale')}</div>
            </div>
        </div>
    );
}

export default Message;