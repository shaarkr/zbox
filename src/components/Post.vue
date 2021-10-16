<template>
  <article class="post">
    <header class="post-header">
      <img
        src="https://picsum.photos/100/200.webp"
        alt="user profile avatar"
        class="user-avatar"
        loading="lazy"
      />
      <div class="user-info">
        <strong class="user-name">Major Nelson</strong>
        <p class="user-status">said this</p>
      </div>
      <p class="user-time">13h ago</p>
    </header>
    <section class="post-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis est
        temporibus mollitia at distinctio totam nesciunt voluptates commodi
        exercitationem sit, velit perferendis fugit. Voluptas, non ullam vero
        nihil perspiciatis hic, commodi eos qui numquam nam provident, quam
        iusto dolorem natus!
      </p>
    </section>

    <figure class="post-image-wrapper">
      <img
        src="https://picsum.photos/800/600.webp"
        alt="a random image "
        loading="lazy"
      />
      <figcaption class="visually-hidden">a random image</figcaption>
      <a href="#post-id" class="post-link" target="_blank" noreferrer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.
      </a>
    </figure>

    <div class="post-stats">
      <ul class="actions">
        <li class="actions-item">
          <i class="actions-icon far fa-heart"></i>
          <span>85 likes</span>
        </li>
        <li class="actions-item">
          <i class="actions-icon far fa-comment-alt"></i>
          <span>12 comments</span>
        </li>
        <li class="actions-item">
          <i class="actions-icon fa fa-share-square"></i>
          <span>2 shares</span>
        </li>
      </ul>
      <p class="menu">
        <i class="menu-icon fa fa-ellipsis-h"></i>
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Post extends Vue {}
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  margin-bottom: 0.5rem;
  color: $color-grey-light;
  background-color: $color-primary-light;

  &-header {
    max-height: 4rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
    font-family: 'Noto Sans', sans-serif;
    line-height: 1;

    .user {
      &-avatar {
        height: 3rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        object-fit: cover;
      }

      &-info {
        flex: 1;
      }

      &-name {
        display: inline-block;
        margin-bottom: 0.5rem;
      }

      &-status {
        color: rgba($color-grey-light, 0.5);
      }

      &-time {
        font-size: 0.85rem;
        color: rgba($color-grey-light, 0.5);
        align-self: flex-start;
      }
    }
  }

  &-content {
    padding: 0.75rem 1rem;
    line-height: 1.3;
    text-align: left;
    word-break: break-word;

    p {
      max-height: 6.5rem;
      width: 100%;
      overflow: hidden;
    }
  }

  &-image-wrapper {
    $image-height: 25rem;

    position: relative;
    width: 100%;
    max-height: $image-height;

    img {
      width: 100%;
      height: 100%;
      max-height: $image-height;
      object-fit: cover;
    }

    figcaption {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.75rem;
      opacity: 0.3;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: rgba($color-primary, 0.8);
      background: linear-gradient(
        to top,
        rgba($color-primary, 0.8) 21%,
        rgba($color-primary, 0.7) 43%,
        rgba($color-primary, 0.55) 68%,
        transparent 100%
      );
    }
  }

  &-link {
    max-width: 56ch;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    margin: 0 1rem 1.5rem;
    color: rgba($color-grey-light, 0.8);
    font-weight: 600;
    font-size: 1.25rem;

    &:hover {
      background: linear-gradient(to right, $color-red, $color-grey-light);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  &-stats {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Noto Sans', sans-serif;

    .actions {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      &-item {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        line-height: 1;
        cursor: pointer;

        span:hover {
          color: rgba($color-grey-light, 0.7);
        }
      }

      &-icon {
        font-size: 0.85rem;
        line-height: 1rem;
        cursor: pointer;

        &:hover {
          color: rgba($color-grey-light, 0.7);
        }
      }
    }

    .menu:hover {
      cursor: pointer;
      color: rgba($color-grey-light, 0.7);
    }
  }
}

.visually-hidden {
  position: absolute;
  width: 0;
  pointer-events: none;
  overflow: hidden;
  padding: 0 !important;
  opacity: 0 !important;
  background: none !important;
}
</style>
