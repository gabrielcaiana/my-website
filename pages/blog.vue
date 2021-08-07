<template>
  <div>
    <main>
      <h2>Latest thoughts</h2>
      <ul>
        <li v-for="(post) in posts" :key="post.id">
          <img :src="post.feature_image" :alt="post.title" />
            <div class="content">
              <span v-text="post.authors[0].name" />
              <p v-text="post.excerpt" />
              <NuxtLink :to=" {path: post.slug}" v-text="post.title" />
            </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getPosts } from "@/api/posts"
  export default {
    async asyncData() {
      const posts = await getPosts();
      return  { posts: posts}
    }
  }
</script>

<style lang="scss" scoped>

</style>