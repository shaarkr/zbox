<template>
  <div class="modal-overlay" />
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <slot name="title">&nbsp;</slot>
        <i class="fa fa-times modal-close" @click="$emit('close')"></i>
      </div>
      <div class="modal-content">
        <slot name="default" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
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
  min-width: 30rem;
  min-height: 25rem;
  max-width: 45rem;
  max-height: 85vh;
  background-color: $color-primary-light;
  box-shadow: 0 0 8px 4px #0003, 0 0 16px 4px #0001;
  border-radius: 2px;

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

  &-header {
    height: 2.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-content {
    padding: 0.5rem 1rem;
    overflow-y: auto;
    scrollbar-width: none;
  }

  &-footer {
    position: absolute;
    bottom: 0;
    height: 2.5rem;
    width: 100%;
    border-top: solid 1px rgba($color-grey-light, 0.1);

    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-close {
    color: $color-grey-light;
    font-size: 1.15rem;
    line-height: 1;
    cursor: pointer;

    &:hover {
      color: rgba($color-grey-light, 0.5);
    }
  }
}
</style>
