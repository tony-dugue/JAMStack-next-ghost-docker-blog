import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.0"
});

export async function getAllPosts() {
  const posts = await api.posts.browse({ limit: 'all', fields: ['title', 'uuid', 'slug'] });
  return posts;
}

export async function getPostBySlug(slug) {
  const post = await api.posts.read(
    { slug },
    { formats: ['html'] }
  );
  return post
}

