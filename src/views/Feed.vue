<template>
  <main class="feed feed-container">
    <header class="feed-header">
      <p class="feed-name">Activity feed</p>
      <p class="feed-filter">
        <i class="fa fa-filter"></i>
        <span>Customise</span>
      </p>
    </header>
    <post-editor @post="handlePost" />
    <ul class="feed-posts">
      <post />
      <post />
      <post />
      <post />
      <post />
    </ul>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PostEditor from '@/components/PostEditor.vue'
import Post from '@/components/Post.vue'

@Options({
  components: {
    PostEditor,
    Post,
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
    padding: 0.5rem 1.5rem;
  }

  &-header {
    height: 2rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
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

  &-posts {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }
}
</style>
