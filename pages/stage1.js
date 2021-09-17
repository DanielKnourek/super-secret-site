import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {    

    function checkCode(){

    }

  return (
    <div className={styles.container}>
      <Head>
        <title>S³</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Začátek pátrání
        </h1>

        <p className={styles.description}>
            Máme zprávy že artefakt se nachází v místě kde je zima celý rok, Ale nachází se pod nejednou taškou. Pokud nemáš na něco zrovna chuť pošleš ho za ním.
        </p>
        <h3>Pro pokračování zadej číslo produktu:</h3>
        <div>
            <label>číslo #</label>
            <input type="number"/>
            <button onClick={checkCode}>Potvrdit</button>
        </div>
      </main>
      <footer className={styles.footer}>
      <a
        href="./">
          Zpět
        </a>
      </footer>
    </div>
  )
}
