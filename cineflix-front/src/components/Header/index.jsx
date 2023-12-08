import Image from 'next/image'
import styles from './styles.module.css'
import Input from '../Input'
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <img className={styles.img}src='/superheroe.png' alt='Interstellar' layout="responsive"/>
                <div className={styles.h1}>
                    <h1>Bem vindo(a)</h1>
                    <p style={{marginTop:'15px'}}>
                        Explore suas séries favoritas
                    </p> 
                  <div className={styles.busca}>
                     <Input name='buscar' id='buscar' type='text' placeholder='Busque por uma série...'/>
                     <button className={styles.button}>
                        Buscar
                    </button>
                  </div>
                </div>
            </div>
        </div>
    )
}
