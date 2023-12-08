import styles from './styles.module.css'
import Link from 'next/link'
export default function Menu() {
    return (
        <>
            <header className={styles.header}>
                <div 
                className={`${styles.container} ${styles.menu}`}>
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
            </header>
        </>
    )
}