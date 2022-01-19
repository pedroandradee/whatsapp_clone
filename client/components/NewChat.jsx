import { useState } from "react";
import styles from "../styles/NewChat.module.css";
import Image from "next/image";

const NewChat = ({onClose}) => {

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

    return (
        <div className={styles.users}>
            <div className={styles.newGroup}>
                <div className={styles.userImage}>
                    <Image 
                        src="/img/tabosa.jpg"
                        objectFit="cover"
                        layout="fill"
                        alt=""
                    />
                </div>
                <span className={styles.span}>Novo grupo</span>
            </div>
            {
                friends?.map((f, index)=>(
                    <div className={styles.newGroup}>
                        <div className={styles.userImage}>
                            <Image 
                                src={f.img}
                                objectFit="cover"
                                layout="fill"
                                alt=""
                            />
                        </div>
                        <span 
                            className={styles.span} 
                            style={{border: index === friends.length - 1 && "0px"}}>{f.username}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default NewChat
