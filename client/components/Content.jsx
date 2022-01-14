import { LaptopMac } from "@material-ui/icons";
import Image from "next/image";
import styles from "../styles/Content.module.css";

const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <Image src="/img/tabosa.jpg" alt="" layout="fill" objectFit="cover" />
                </div>
                <span className={styles.title}>Mantenha seu celular conectado</span>
                <span className={styles.msg}>
                    O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.
                </span>
                <div className={styles.hr} />
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <LaptopMac fontSize="small" />
                    </div>
                    <span className={styles.msg}>
                        Faça chamadas a partir de um computador com o WhatsApp para Windows. 
                        <span className={styles.link}>
                            Baixe aqui.
                        </span>
                    </span>
                </div>
            </div>
            <div className={styles.footer}></div>
        </div>
    );
}

export default Content;