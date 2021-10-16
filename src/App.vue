<template>
  <div class="container">
    <drawer />
    <info-view />
    <router-view />
    <sidebar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Drawer from '@/views/Drawer.vue'
import InfoView from '@/views/InfoView.vue'
import Sidebar from '@/views/Sidebar.vue'

@Options({
  components: {
    Drawer,
    InfoView,
    Sidebar,
  },
})
export default class App extends Vue {}
</script>
