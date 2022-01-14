import styles from "../styles/Message.module.css";
import { format } from "timeago.js"

const Message = ({message, own}) => {

    return(
        <div className={own ? styles.messageOwn : styles.message}>
            <div className={own ? styles.messageContainerOwn : styles.messageContainer}>
                <div className={styles.messageTop}>
                    <span className={own ? styles.usernameOwn : styles.username}>{message.own.user.username}</span>
                    <p className={styles.messageText}>{message.text}</p>
                </div>
                <div className={styles.messageBottom}>{format(message.created_at)}</div>
            </div>
        </div>
    );
}

export default Message;