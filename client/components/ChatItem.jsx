import styles from "../styles/ChatItem.module.css"
import Image from "next/image"

const ChatItem = ({onClick, activated, informations}) => {



    return (
        <div 
            className={activated ? styles.containerActivated : styles.container}
            onClick={onClick}
        >
            <div className={styles.imageContainer}>
                <Image 
                    src={informations.img}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.username}>{informations.chatName}</div>
                    <div className={styles.sendDate}>15:04</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.lastMsg}>
                        <p>{informations.lastMsg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem
