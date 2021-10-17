<template>
  <section class="section" @click.capture="open = false">
    <h2 class="section-title">Activity alerts</h2>
    <ul class="notification" v-if="notifications.length">
      <li
        class="notification-item"
        v-for="item in notifications"
        :key="item.id"
      >
        {{ item.message }}
      </li>
    </ul>
    <!-- Show Error Message -->
    <error-box
      v-else
      icon="comments"
      message="When people like, share, and comment on things in your activity feed, or add you as a friend, you will see it here."
      description=""
    />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ErrorBox from '@/components/ErrorBox.vue'

@Options({
  components: {
    ErrorBox,
  },
})
export default class Sidebar extends Vue {
  notifications = []
  // notifications = [{ id: 1, message: '23 people liked your recent update!' }]
}
</script>

<style lang="scss" scoped>
.section {
  padding: 0 1rem;
}
</style>
