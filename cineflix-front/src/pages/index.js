import Cabecario from '@/components/Cabecario'
import ListSerie from '@/components/ListSerie'
import Header from '@/components/Header'
import styles from '@/styles/home.module.css'
export default function Home() {
  return (
    <>
    <Cabecario/> 
    <Header/> 
    <div className={styles.home}>
      <ListSerie/>
    </div>  
    </>
  )
}
