<template>
  <nav class="drawer" :class="{ expand: open }">
    <drawer-item icon="bars" :show="false" @click="open = !open" />
    <profile :show="open" />
    <ul class="links" v-for="item in navigationList" :key="item.id">
      <drawer-item :icon="item.icon" :name="item.name" :show="open" />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Profile from '@/components/Profile.vue'
import DrawerItem from '@/components/DrawerItem.vue'

@Options({
  components: {
    Profile,
    DrawerItem,
  },
})
export default class Drawer extends Vue {
  open = false
  navigationList = [
    { id: '1', name: 'Home', route: 'Home', icon: 'home' },
    { id: '2', name: 'My Games', route: 'Games', icon: 'th-large' },
    { id: '3', name: 'Achievements', route: 'Achievements', icon: 'trophy' },
    { id: '4', name: 'Captures', route: 'Captures', icon: 'camera-retro' },
    { id: '5', name: 'Clubs', route: 'Clubs', icon: 'user-friends' },
    { id: '6', name: 'Trending', route: 'Trending', icon: 'poll' },
    {
      id: '7',
      name: 'Microsoft Store',
      route: 'Microsoft Store',
      icon: 'store-alt',
    },
    { id: '8', name: 'Search', route: 'Search', icon: 'search' },
    { id: '9', name: 'Connection', route: 'Connection', icon: 'server' },
    { id: '10', name: 'Settings', route: 'Settings', icon: 'cog' },
  ]
}
</script>
