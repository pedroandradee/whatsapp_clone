import Image from "next/image";
import styles from "../styles/Userbar.module.css";
import { DataUsage, Chat, MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice"
import { useEffect } from "react";

const Userbar = ({user}) => {

    const [show, setShow] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/");
    }

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <Image 
                        src="/img/tabosa.jpg"
                        objectFit="cover"
                        layout="fill"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.userContainer}>
                <span className={styles.username}>
                    {user.username}
                </span>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <DataUsage />
                </div>
                <div className={styles.icon}>
                    <Chat />
                </div>
                <div className={styles.icon} onClick={()=>setShow(!show)}>
                    <MoreVert />
                    {
                        show &&
                        <div className={styles.menu}>
                            <div className={styles.itemMenu} onClick={handleLogout}>
                                <span className={styles.text}>Logout</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Userbar;