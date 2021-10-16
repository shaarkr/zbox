<template>
  <section class="section" @click.capture="open = false">
    <h2 class="section-title">Friends & clubs</h2>
    <div class="input-group">
      <input
        v-model="searchInput"
        type="text"
        placeholder="Find clubs or people"
        class="input-control"
      />
      <div class="input-append">
        <i class="input-clear fa fa-times" v-if="searchInput"></i>
        <i class="input-search fa fa-search"></i>
      </div>
    </div>
    <div class="section-filter">
      <p class="section-filter-item selected" @click="open = !open">
        <span>{{ filterName }}</span>
        <i class="fa fa-angle-down"></i>
      </p>
      <ul class="wrapper" v-if="open" @click.capture="handleFilter">
        <li
          class="section-filter-item"
          v-for="(item, idx) in filterKeys"
          :key="idx"
          :data-value="item"
        >
          {{ filterListFromKey(item) }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Filters, AvailableFilters } from '@/constants/data'

@Options({})
export default class FriendsList extends Vue {
  searchInput = ''
  open = false
  selectedFilter: Filters = 'all'

  handleFilter(evt: Event): void {
    const target = evt.target as HTMLUListElement
    this.selectedFilter = (target.dataset.value as Filters) || 'all'
  }

  filterListFromKey(key: Filters): string {
    return AvailableFilters[key]
  }

  get filterName(): string {
    return AvailableFilters[this.selectedFilter]
  }

  get filterKeys(): string[] {
    return Object.keys(AvailableFilters)
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100%;
  padding: 1rem;

  &-title {
    display: inline-block;
    padding: 1.5rem 0;
    font-weight: 400;
    font-size: 1.15rem;
  }

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

  &-filter {
    height: 2rem;
    max-width: max-content;
    line-height: 2rem;
    position: relative;

    &-item {
      display: flex;
      align-items: center;
      cursor: pointer;

      &.selected {
        letter-spacing: 0.5px;
      }

      i {
        margin-left: 1.5rem;
      }
    }

    .wrapper {
      position: absolute;
      top: 2px;
      left: -0.5rem;
      right: 0;
      width: max-content;
      background: $color-grey-dark;
      box-shadow: 0 0 6px 6px #0003;

      li {
        display: block;
        padding: 0.5rem 1.25rem;
        transition: background-color 100ms ease-out;

        &:hover {
          background-color: $color-accent;
        }
      }
    }
  }
}
</style>
