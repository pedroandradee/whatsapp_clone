import Image from "next/image";
import styles from "../styles/Searchbar.module.css";
import { Search } from "@material-ui/icons";

const Searchbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.barContainer}>
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <Search />
                    </div>
                </div>
                <input className={styles.input} placeholder="Pesquisar ou iniciar uma nova conversa" />
            </div>
        </div>
    );
}

export default Searchbar;