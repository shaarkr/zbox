<template>
  <section class="section" @click.capture="open = false">
    <h2 class="section-title">Friends & clubs</h2>
    <search-input
      v-model.trim="searchInput"
      placeholder="Find clubs or people"
      @search="handleSearch"
    />
    <div class="section-filter">
      <p class="section-filter-item selected" @click="open = !open">
        <span>{{ filterName }}</span>
        <i class="fa fa-angle-down"></i>
      </p>
      <ul class="dropdown" v-if="open" @click.capture="handleFilter">
        <li
          class="dropdown-item"
          v-for="(item, idx) in filterKeys"
          :key="idx"
          :data-value="item"
        >
          {{ filterListFromKey(item) }}
        </li>
      </ul>
    </div>
    <!-- TODO: Loop based on data -->
    <section-card
      title="Suggestions"
      option="See all"
      icon="th"
      :cards="suggestions"
    />
    <section-card title="Friends" :cards="offline" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SectionCard from '@/components/SectionCard.vue'
import SearchInput from '@/components/SearchInput.vue'

import { Filters, AvailableFilters } from '@/constants/data'
import { SectionCardType } from '@/constants/interfaces'

@Options({
  components: {
    SectionCard,
    SearchInput,
  },
})
export default class FriendsList extends Vue {
  searchInput = ''
  open = false
  selectedFilter: Filters = 'all'

  // TODO: Organize data into a constant file or API service
  suggestions: SectionCardType[] = [
    {
      id: 1,
      icon: 'https://picsum.photos/200',
      message: 'Link Facebook account',
      status: 'Find Facebook friends',
    },
    {
      id: 2,
      icon: 'https://picsum.photos/230',
      message: 'Link Google account',
      status: 'Find contacts on Google',
    },
  ]
  offline: SectionCardType[] = [
    {
      id: 1,
      icon: 'https://picsum.photos/210',
      message: 'Major Nelson',
      status: 'Last seen 11h ago: Home',
    },
    {
      id: 2,
      icon: 'https://picsum.photos/220',
      message: 'Random',
      status: 'Offline',
    },
    {
      id: 3,
      icon: 'https://picsum.photos/240',
      message: 'Sharath',
      status: 'Online',
    },
  ]

  handleSearch(query: string): void {
    if (!query) return
    // TODO: Filter Cards
  }

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

  &-filter {
    height: 2rem;
    margin-bottom: 1.5rem;
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
  }

  .dropdown {
    top: 2px;
    left: -0.5rem;
  }
}
</style>
