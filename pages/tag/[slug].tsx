import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from '../../styles/Home.module.scss'

import {getAllPostsByTagSlug, getAllTags, getTagBySlug} from '../../lib/ghost';
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();
  const paths = tags.map( (tag: { slug: string }) => ({ params: { slug: tag.slug } }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllPostsByTagSlug(params?.slug);
  const tagData = await getTagBySlug(params?.slug);
  return { props: { posts, tagData } };
}

type Post = { title: string, slug: string, uuid: string  }
type Tag = { id: number, name: string, slug: string }
type TagData = { name: string, count: any }

const Tag: NextPage<{ posts: Post[], tagData: TagData }> = ({ posts, tagData }) => {
  return (
    <div className={styles.container}>

      <Link href='/'>Go back</Link>

      <h1>{tagData.name}</h1>

      <p>A collection of {tagData.count.posts} posts</p>

      <ul>
        {posts.map( (post: Post)  => (
          <li key={post.uuid}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Tag
