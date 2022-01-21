import { useState } from "react";
import styles from "../styles/NewChat.module.css";
import Image from "next/image";
import { ArrowBackRounded, Search } from "@material-ui/icons";
import { useEffect } from "react";
import axios from "axios";

const NewChat = ({friends, user, show, setShow}) => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        if(show){
            const getList = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/users/${user.id}`);
                    console.log(res.data);
                    setList(res.data);
                } catch(err){
                    console.log(err);
                }
            }
            getList();
        }
    }, [show]);

    return (
        <div className={styles.container} style={{ left: show ? 0 : -500 }}>
            <div className={styles.head}>
                <div className={styles.back} onClick={() => setShow(false)}>
                    <ArrowBackRounded style={{color: "#FFFFFF"}} />
                </div>
                <div className={styles.title}>Nova conversa</div>
            </div>
            <div className={styles.search}>
                <div className={styles.totalAreaInput}>
                    <Search fontSize="small" style={{color: '#919191'}} />
                    <input type="search" placeholder="Pesquise contatos" />
                </div>
            </div>
            <div className={styles.friendList}>
                <div className={styles.friendContainer}>
                    <div className={styles.userImage}>
                        <Image 
                            src="/img/tabosa.jpg"
                            objectFit="cover"
                            layout="fill"
                            alt=""
                        />
                    </div>
                    <div className={styles.friendName}>Novo grupo</div>
                </div>
                {
                    list?.map((f, index)=>(
                        <div className={styles.friendContainer} key={index}>
                            <div className={styles.userImage}>
                                <Image 
                                    src={`/img/${f.profile_picture}`}
                                    objectFit="cover"
                                    layout="fill"
                                    alt=""
                                />
                            </div>
                            <div className={styles.friendName}>{f.username}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewChat
