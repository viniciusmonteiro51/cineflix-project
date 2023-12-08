import styles from './styles.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import Link from 'next/link'
import Serie from '../Serie'

export default function ListSerie() {

    const [series, setSeries] = useState([]);

    const pushSeries = async () => {
        try {
            const res = await axios.get('http://localhost:1337/api/series?populate=*');
            setSeries(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pushSeries();
    }, []);

    return (
        <div className={styles.listCard}>
            {series?.map((serie) =>
                <Serie 
                    key={serie.id}
                    id={serie.id}
                    titulo={serie.attributes.titulo}
                    capa={"http://localhost:1337" + serie.attributes.capa.data.attributes.url}
                    
                />
            )}
        </div>
    )
}
