<template>
  <div class="modal-overlay"></div>
  <div class="modal-wrapper">
    <div class="modal">
      <i class="fa fa-times modal-close" @click="$emit('close')"></i>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  emits: ['close'],
})
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  min-width: 16rem;
  max-width: 45rem;
  max-height: 85vh;
  background-color: $color-primary-light;
  box-shadow: 0 0 8px 4px #0003, 0 0 16px 4px #0001;
  border-radius: 2px;

  &-close {
    position: absolute;
    top: 10px;
    right: 12px;
    color: $color-grey-light;
    font-size: 1.15rem;
    line-height: 1;
    cursor: pointer;
    z-index: 250;

    &:hover {
      color: rgba($color-grey-light, 0.5);
    }
  }

  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
    background-color: rgba($color-primary, 0.85);

    @supports (backdrop-filter: blur(1px)) {
      background-color: rgba($color-primary, 0.5);
      backdrop-filter: blur(1px);
    }
  }

  &-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    z-index: 200;
  }

  &-content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    scrollbar-width: none;
  }
}
</style>
