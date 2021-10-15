<template>
  <section class="view article">
    <h1>New Xbox app for Windows 10</h1>
    <article class="article-description">
      <div class="article-background">
        <img
          src="@/assets/images/laptop-2.jpg"
          alt="a laptop screen with some code displayed on it"
        />
      </div>
      <p>We're working on a new Xbox app for your PC.</p>
      <p>We're excited for you to check out the updates we've made so far.</p>
      <p>Download it today and tell us what you think!</p>

      <img
        src="@/assets/images/laptop-1.png"
        alt="an image of a laptop shoing the new features"
        class="article-image"
      />

      <button class="btn btn-large">
        Download the App <i class="fa fa-angle-right"></i>
      </button>

      <a href="#" class="link link-feedback">Tell us what you think</a>
    </article>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class InfoView extends Vue {}
</script>

<style lang="scss" scoped>
.article {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 18rem;
  overflow: hidden;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }

  &-description {
    position: relative;
    line-height: 1.3;

    & > p + p {
      margin-top: 1rem;
    }

    & > * {
      position: relative;
      z-index: 10;
    }
  }

  &-background {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    height: 70%;
    border-radius: 3rem;
    box-shadow: 0 0 16px 20px #0005;
    transform: rotate(-5deg) translateY(15%);
    filter: blur(2px) opacity(0.4);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(0.9);
      filter: drop-shadow(0 0 16px #0007) blur(4px) brightness(1.5) opacity(0.7);
    }
  }

  &-image {
    max-width: 15rem;
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    margin: 1.5rem 0;
  }

  .btn-large {
    margin-bottom: 1.5rem;
  }

  .link-feedback {
    display: block;
    text-decoration: underline;
    text-align: center;
    color: $color-grey-light;
    font-size: 0.85rem;
  }
}
</style>
