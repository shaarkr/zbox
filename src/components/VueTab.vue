<template>
  <div class="tabs-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { TabsActions } from '@/constants/enum'
import { Payload } from '@/constants/interfaces'
import { Options, Vue } from 'vue-class-component'
import { namespace } from 'vuex-class'
const tabs = namespace('tabs')

@Options({
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
export default class VueTab extends Vue {
  label!: string
  active!: boolean

  @tabs.Action(TabsActions.UPDATE_LABEL)
  // eslint-disable-next-line no-unused-vars
  addLabel!: (payload: Payload) => void

  @tabs.Action(TabsActions.UPDATE_ELEMENT)
  // eslint-disable-next-line no-unused-vars
  addComponent!: (element: HTMLElement) => void

  mounted(): void {
    const payload = {
      label: this.label,
      active: this.active,
    }
    this.addLabel(payload)
    this.addComponent(this.$el)
  }
}
</script>

<style lang="scss" scoped></style>
