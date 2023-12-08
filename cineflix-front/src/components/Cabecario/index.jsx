import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Menu from '../Menu';
export default function Cabecario() {

    const [links, setLinks] = useState(false);

    const mostrarLinks = () => {
        setLinks(!links);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontainer}>
                    <div className={styles.serie}>
                        <h1>Minhas</h1>
                        <h2>Séries</h2>
                    </div>
                    <div className={styles.link}>
                        <div>
                            <Link href='/'>POPULARES</Link>
                        </div>
                        <div>
                            <Link href='/'>MAIS BEM AVALIADAS</Link>
                        </div>
                        <div>
                            <Link href='/'>NA TV</Link>
                        </div>
                    </div>
                    <div className={styles.iconMenu} onClick={mostrarLinks}>
                        <IoMenu
                            style={{
                                width: '20px',
                                height: '20px'
                            }} />
                    </div>
                </div>
            </div>
            <div
                className={`${styles.menuContainer} 
        ${links ? '' : styles.sumir}`}>
                <Menu />
            </div>
        </>
)}