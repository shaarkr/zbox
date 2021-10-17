<template>
  <section class="section">
    <div class="alert">
      <p class="alert-message">
        Messages are no longer available in this app. Click "Learn More" for
        options
      </p>
      <!-- TODO: Open a dialog window -->
      <a href="" class="link alert-reference">Learn more</a>
    </div>

    <article class="info">
      <p>There are many ways to message with your friends on Xbox</p>
      <p>Press Win+G to message using Xbox Game Bar</p>
      <p>Or message with the new Xbox app</p>
    </article>
    <button class="btn btn-large info-link">
      Download the App <i class="fa fa-angle-right"></i>
    </button>
    <div class="info-scan">
      <p>Or use the new Xbox app on mobile</p>
      <img src="@/assets/images/message_qr.png" alt="" class="info-qr" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Messages extends Vue {}
</script>

<style lang="scss" scoped>
.alert {
  &-message {
    word-break: break-word;
  }

  &-reference {
    display: inline-block;
    margin-top: 0.5rem;
    text-decoration: underline;
    color: inherit;
  }
}

.info {
  padding: 0 1rem;
  text-align: center;
  color: $color-grey-light;
  font-size: 1rem;
  line-height: 1.25;

  p:first-child {
    margin-top: 1rem;
  }

  & > p + p {
    margin-top: 2rem;
  }

  &-link {
    height: 3rem;
    margin-top: 0.75rem;
    box-shadow: none;
    outline: solid 3px transparent;

    &:hover {
      background-color: rgba($color-grey-light, 0.2);
      outline-color: rgba($color-grey-light, 0.4);
    }
  }

  &-scan {
    margin-top: 2rem;
    text-align: center;
  }

  &-qr {
    height: 11rem;
    aspect-ratio: 1/1;
    margin: 0.75rem auto 0;
    object-fit: cover;
    outline: solid 4px rgba($color-grey-light, 0.2);
    box-shadow: 0 0 2px 2px #0002;

    &:hover {
      outline-color: rgba($color-grey-light, 0.6);
    }
  }
}
</style>
