import styles from './styles.module.css'

export default function Input({ placeholder, ...props}){
    return(
        <>
        <input  className={styles.input} placeholder={placeholder}{...props}/>
        </>
    )
}