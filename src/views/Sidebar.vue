<template>
  <aside class="sidebar">
    <vue-tabs>
      <vue-tab label="first">
        <h1>First</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          corporis!
        </div>
      </vue-tab>
      <vue-tab label="second">
        <h1>Second</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          corporis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Asperiores voluptatum, dolore provident sequi incidunt mollitia odit
          minus facere itaque reprehenderit minima aperiam nihil numquam veniam
          porro assumenda doloribus quidem id!
        </div>
      </vue-tab>
      <vue-tab label="third" :active="true">
        <h1>Third</h1>
        <div>
          Далеко-далеко за словесными горами в стране гласных, и согласных живут
          рыбные тексты. Жаренные свой гор деревни о всеми, бросил власти одна
          коварный имени, над, несколько путь которой щеке предложения залетают
          вершину первую.
        </div>
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
