<template>
  <div class="input-group">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :placeholder="placeholder"
      class="input-control"
    />
    <div class="input-append">
      <i
        class="input-clear fa fa-times"
        v-if="modelValue"
        @click="$emit('update:modelValue', '')"
      ></i>
      <i
        class="input-search fa fa-search"
        @click="$emit('search', modelValue.trim().toLowerCase())"
      ></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  emits: ['update:modelValue', 'search'],
})
export default class SearchInput extends Vue {
  modelValue!: string
}
</script>

<style lang="scss" scoped>
.input {
  &-group {
    position: relative;
    height: 3rem;
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    color: $color-grey-light;
    line-height: 1.15;
  }

  &-control {
    height: 100%;
    width: 100%;
    padding: 0.5rem 0;
    padding-right: 6rem;
    padding-left: 1rem;
    background-color: $color-primary-light;
    border-top: solid 1px rgba($color-grey-light, 0.15);
    border-bottom: solid 1px rgba($color-grey-light, 0.15);
    color: currentColor;
    font-size: 1rem;
  }

  &-append {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    color: currentColor;
  }

  &-search {
    transform: scaleX(-1);
  }

  &-clear,
  &-search {
    height: 3rem;
    width: 2.5rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
      background-color: rgba($color-grey-dark, 0.7);
    }
  }
}
</style>
