<template>
  <article class="card">
    <header class="card-header" v-if="title">
      <p v-if="title === 'Offline'">
        {{ title }} <span v-if="cardsCounter > 1">({{ cardsCounter }})</span>
      </p>
      <p v-else>
        {{ title }}
        <span v-if="title !== 'Suggestions'">({{ counter }} online)</span>
      </p>
      <p class="card-option" v-if="option">
        <i class="fa" :class="iconName"></i>
        <span>{{ option }}</span>
      </p>
    </header>
    <ul class="card-list">
      <li class="card-item" v-for="(item, idx) in cards" :key="idx">
        <img
          :src="item.icon"
          alt=""
          class="card-item-icon"
          :class="{ large }"
          loading="lazy"
        />
        <div class="card-item-info">
          <p class="card-item-message" :class="{ large }">{{ item.message }}</p>
          <p class="card-item-status" v-if="item.status && !large">
            {{ item.status }}
          </p>
        </div>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { Options, Vue } from 'vue-class-component'
import { SectionCardType } from '@/constants/interfaces'

@Options({
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    option: {
      type: String,
      default: '',
    },
    cards: {
      type: Array as PropType<SectionCardType[]>,
      default: [],
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
})
export default class SectionCard extends Vue {
  title!: string
  icon!: string
  option!: string
  large!: boolean
  cards!: SectionCardType[]

  get iconName(): string {
    return `fa-${this.icon}`
  }

  get counter(): number {
    return this.cards.filter(item =>
      item.status.toLowerCase().includes('online')
    ).length
  }

  get cardsCounter(): number {
    return this.cards.length
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem 0;
  color: $color-grey-light;

  &-header {
    margin: 1rem 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.25;
  }

  &-option i {
    margin-right: 0.5rem;
    font-size: 0.85rem;
    line-height: 1rem;
  }

  &-list {
    width: calc(100% + 2rem);
    margin: 0 -1rem;
  }

  &-item {
    padding: 4px 1rem;
    display: flex;
    align-items: center;
    transition: background-color 100ms ease-out;

    &-icon {
      height: 2.5rem;
      aspect-ratio: 1/1;
      object-fit: cover;
      margin-right: 1rem;
      border-radius: 50%;
      background-image: $placeholder-gradient;

      &.large {
        height: 4.5rem;
        border-radius: unset;
        margin-right: 0.5rem;
      }
    }

    &-info {
      flex: 1;
      letter-spacing: 0.5px;
      line-height: 1.25;
    }

    &-message {
      font-size: 1rem;
      margin-bottom: 4px;
      font-weight: 500;

      &.large {
        font-size: 0.85rem;
        max-width: 26ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &-status {
      font-family: 'Nato Sans', sans-serif;
      font-size: 0.85rem;
      font-weight: 400;
      color: rgba($color-grey-light, 0.55);
    }

    &:hover {
      cursor: pointer;
      background-color: rgba($color-grey-dark, 0.8);
      color: rgba($color-grey-light, 0.8);
    }
  }
}
</style>
