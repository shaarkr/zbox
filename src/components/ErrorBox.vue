<template>
  <div class="error">
    <i class="error-icon fa" :class="iconName"></i>
    <p class="error-message" v-if="message">{{ message }}</p>
    <small class="error-description" v-if="description">{{
      description
    }}</small>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    message: {
      type: String,
      default: 'Uh oh! Something went wrong',
    },
    description: {
      type: String,
      default: 'we ran into an unexpected issue. Please try again after later.',
    },
    icon: {
      type: String,
      default: 'exclamation-triangle',
    },
  },
})
export default class ErrorBox extends Vue {
  message!: string
  description!: string
  icon!: string

  get iconName(): string {
    return `fa-${this.icon}`
  }
}
</script>

<style lang="scss" scoped>
.error {
  max-height: 15rem;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1.25;

  &-icon {
    font-size: 2.5rem;
    color: $color-grey-light;
  }

  &-message {
    font-size: 1rem;
    font-weight: 500;
    color: $color-grey-light;
  }

  &-description {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba($color-grey-light, 0.5);
  }
}
</style>
