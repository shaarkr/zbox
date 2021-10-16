<template>
  <aside class="sidebar">
    <vue-tabs>
      <vue-tab label="user-friends" :active="true">
        <h1>Friends List</h1>
      </vue-tab>
      <vue-tab label="users">
        <h1>Parties</h1>
      </vue-tab>
      <vue-tab label="comments">
        <h1>Messages</h1>
      </vue-tab>
      <vue-tab label="bell">
        <h1>Alerts</h1>
      </vue-tab>
    </vue-tabs>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VueTabs from '@/components/VueTabs.vue'
import VueTab from '@/components/VueTab.vue'
@Options({
  components: {
    VueTabs,
    VueTab,
  },
})
export default class Sidebar extends Vue {}
</script>
