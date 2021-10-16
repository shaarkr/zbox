<template>
  <div class="tabs">
    <div class="tabs-list">
      <div
        class="tabs-tab"
        :class="{ active: i === active }"
        @click="changeTab(i)"
        v-for="(label, i) in tabsList.labels"
        :key="i"
      >
        {{ label }}
      </div>
    </div>
    <div class="tabs-container" ref="container">
      <div class="tabs-wrapper" ref="wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TabsActions } from '@/constants/enum'
import { TabItem } from '@/constants/interfaces'
import { Options, Vue } from 'vue-class-component'
import { namespace } from 'vuex-class'
const tabs = namespace('tabs')

@Options({})
export default class VueTabs extends Vue {
  @tabs.Action(TabsActions.UPDATE_ACTIVE)
  // eslint-disable-next-line no-unused-vars
  activateTab!: (index: number) => void

  @tabs.Getter
  tabsList!: TabItem

  scrollWrapper(): void {
    const wrapper = this.$refs.wrapper as HTMLElement
    const offset = 100 * this.active
    wrapper.style.transform = `translate3d(-${offset}%, 0, 0)`
  }

  changeTab(idx: number): void {
    this.activateTab(idx)
    this.scrollWrapper()
  }

  mounted(): void {
    this.scrollWrapper()
  }

  get active(): number {
    return this.tabsList.active
  }
}
</script>

<style lang="scss" scoped></style>
