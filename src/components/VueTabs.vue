<template>
  <ul class="tabs">
    <li
      v-for="(label, idx) in tabsList.labels"
      :key="label"
      class="tabs-item"
      :class="{ active: idx === active }"
      @click="changeTab(idx)"
    >
      <i class="tabs-icon" :class="iconName(label)"></i>
    </li>
  </ul>
  <div class="tabs-container" ref="container">
    <div class="tabs-wrapper" ref="wrapper">
      <slot />
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

  iconName(icon: string): string {
    return `fa fa-${icon}`
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  height: $metric-tabs-bar;

  &-item {
    flex: 1;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 3px transparent;

    color: fade-out($color-grey-light, 0.5);
    font-size: 0.85rem;
    cursor: pointer;
    transition: border 100ms ease;

    &:hover {
      color: $color-grey-light;
    }

    &.active {
      color: $color-grey-light;
      border-bottom: solid 3px $color-accent;
    }
  }

  &-container {
    position: relative;
    height: $metric-tabs-height;
    overflow: hidden;
  }

  &-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    will-change: transform;
    transition: transform 300ms cubic-bezier(0.86, 0, 0.07, 1);
  }
}
</style>
