import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Login.module.css";

import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/users/login", data);
            const user = res.data;
            dispatch(login({...user}));
        } catch(err){}
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <form className={styles.form}>
                    <div className={styles.inputs}>
                        <h3 className={styles.title}>Sign in to WhatsApp</h3>
                        <div className={styles.inputContainer}>
                            <span>Email</span>
                            <input 
                                className={styles.input} 
                                type="text" 
                                placeholder="email" 
                                required 
                                value={data.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <span>Password</span>
                            <input 
                                className={styles.input} 
                                type="password" 
                                placeholder="password" 
                                required 
                                value={data.password}
                                name="password"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={handleSubmit}>Sign in</button>
                        <button className={styles.button}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;