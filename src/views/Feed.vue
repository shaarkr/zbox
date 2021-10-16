<template>
  <main class="feed feed-container">
    <header class="feed-header">
      <p class="feed-name">Activity feed</p>
      <p class="feed-filter">
        <i class="fa fa-filter"></i>
        <span>Customise</span>
      </p>
    </header>
    <input-post @post="handlePost" />
    <ul v-if="posts.length">
      <li v-for="(post, idx) in posts" :key="idx">{{ post }}</li>
    </ul>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import InputPost from '@/components/InputPost.vue'

@Options({
  components: {
    InputPost,
  },
})
export default class Feed extends Vue {
  posts: string[] = []

  handlePost(data: string): void {
    this.posts.push(data)
  }
}
</script>

<style lang="scss" scoped>
.feed {
  &-container {
    padding: 1.5rem;
  }

  &-header {
    height: 2rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-filter {
    i {
      margin-right: 0.5rem;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
</style>
