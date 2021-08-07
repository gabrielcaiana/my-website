import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://myblog-4.ghost.io',
  key: '0ee43d9c46de91ec1ee921b43b',
  version: "v3"
});

export async function getPosts() {
  return await api.posts

  .browse({
    limit: "all",
    include: "tags,authors"
  }).catch(err => {
    console.log(err)
  })
}