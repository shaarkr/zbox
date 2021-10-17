<template>
  <li class="item">
    <div class="item-icon">
      <i class="fa" :class="iconName"></i>
    </div>
    <p class="item-name" v-if="show">{{ name }}</p>
    <div class="item-icon" v-if="dropdown">
      <i class="fa fa-angle-down"></i>
    </div>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: true,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
  },
})
export default class DrawerItem extends Vue {
  name!: string
  icon!: string
  show!: boolean

  get iconName(): string {
    return `fa-${this.icon}`
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  transition: background-color 200ms ease-out;
  white-space: nowrap;

  &:hover {
    background-color: $color-grey-dark;
  }

  &.active {
    background-color: $color-accent;
  }

  &-icon {
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-name {
    padding: 0 1rem;
    flex: 1;
  }
}
</style>
