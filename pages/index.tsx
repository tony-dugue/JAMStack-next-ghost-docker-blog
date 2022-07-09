import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

import { getAllPosts } from '../lib/ghost';

type Post = { title: string, slug: string, uuid: string }

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 10 // in seconds
  };
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mon blog</title>
        <meta name="description" content="Voici un blog de test JAMStack fait en Next / Ghost / Docker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Mon blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.uuid}>
              <Link href={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>

      </main>
    </div>
  )
}

export default Home

