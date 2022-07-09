import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

import { getAllPosts, getPostBySlug } from '../../lib/ghost';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map( (post: { slug: any }) => ({ params: { slug: post.slug } }));
  return { paths, fallback: true };  // paths => slugs which are allowed
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug);
  return { props: { post } };
}

type Post = { title: string, html: string }

const Post: NextPage<{post: Post}> = ({ post }) => {
  return (
    <article className={styles.container}>
      <Link href='/'>Go back</Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html}} />
    </article>
  )
}

export default Post
