<template>
  <aside class="sidebar">
    <vue-tabs>
      <vue-tab label="user-friends" :active="true">
        <friends-list />
      </vue-tab>
      <vue-tab label="users">
        <parties />
      </vue-tab>
      <vue-tab label="comments">
        <messages />
      </vue-tab>
      <vue-tab label="bell">
        <notifications />
      </vue-tab>
    </vue-tabs>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VueTabs from '@/components/VueTabs.vue'
import VueTab from '@/components/VueTab.vue'
import FriendsList from '@/components/tabs/FriendsList.vue'
import Parties from '@/components/tabs/Parties.vue'
import Messages from '@/components/tabs/Messages.vue'
import Notifications from '@/components/tabs/Notifications.vue'

@Options({
  components: {
    VueTabs,
    VueTab,
    FriendsList,
    Parties,
    Messages,
    Notifications,
  },
})
export default class Sidebar extends Vue {}
</script>
