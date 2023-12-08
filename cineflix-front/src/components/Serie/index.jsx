import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Serie({id, titulo, capa}){
    
  
    return(
        <>
        <Link href={`/series/${id}`}>
            <div className={styles.card}>
                <div>
                    <h1>{titulo}</h1>
                    <img
                    src={capa} 
                    alt={titulo} 
                    width={200}
                    height={309}
                    />
                </div>
            </div>
        </Link>
        </>
    )
}