import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon blog</title>
        <meta name="description" content="Voici un blog de test JAMStack fait en Next / Ghost / Docker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mon blog</h1>
        <p className={styles.description}>Ma description</p>
      </main>
    </div>
  )
}

export default Home

