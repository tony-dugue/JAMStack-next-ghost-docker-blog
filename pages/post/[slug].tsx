import {useState} from "react";
import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

import { getAllPosts, getPostBySlug } from '../../lib/ghost';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map( (post: { slug: string }) => ({ params: { slug: post.slug } }));
  return { paths, fallback: true };  // paths => slugs which are allowed
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug);
  return {
    props: { post },
    revalidate: 10 // at most 1 request to the Ghost CMS in the backend
  };
}

type Post = { title: string, html: string, slug: string, tags: [] }
type Tag = { id: number, name: string, slug: string }

const Post: NextPage<{post: Post}> = ({ post }) => {

  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true)

  function loadComments() {
    // going to load Disqus
    setEnableLoadComments(false)

    ;(window as any).disqus_config = function () {
      this.page.url = window.location.href; // replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = post.slug  // replace PAGE_IDENTIFIER with your page's unique identifier variable
    }

    const script = document.createElement('script');
    script.src = 'https://ghostcms-nextjs.disqus.com/embed.js'
    script.setAttribute('data-timestamp', Date.now().toString())

    document.body.appendChild(script)
  }

  return (
    <article className={styles.container}>

      <Link href='/'>Go back</Link>

      <h1>{post.title}</h1>

      <div>
        {post.tags.map( (tag: Tag) => (
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            <a>#{tag.name}</a>
          </Link>
        ))}
      </div>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: post.html}} />

      {/* comments */}
      {enableLoadComments && (
        <p className={styles.goback} onClick={loadComments}>Load Comments</p>
      )}

      <div id="disqus_thread"></div>
    </article>
  )
}

export default Post
