<template>
  <section class="section">
    <h2 class="section-title">Parties</h2>
    <div class="section-actions">
      <button type="button" class="btn-form new">Start a party</button>
      <button type="button" class="btn-form join" @click="showSearch = true">
        Looking for Group
      </button>
    </div>
    <search-input
      v-if="showSearch"
      v-model.trim="searchInput"
      placeholder="Find clubs or people"
      @search="handleSearch"
    />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SearchInput from '@/components/SearchInput.vue'

@Options({
  components: {
    SearchInput,
  },
})
export default class FriendsList extends Vue {
  searchInput = ''

  handleSearch(query: string): void {
    if (!query) return
    // TODO: Filter Cards
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100%;
  padding: 1rem;

  &-actions {
    height: 3rem;
    width: calc(100% + 1.5rem);
    margin: 0 -0.75rem;
    border-top: solid 1px rgba($color-grey-light, 0.15);
    border-bottom: solid 1px rgba($color-grey-light, 0.15);

    display: flex;
    align-items: center;
    column-gap: 4px;

    color: $color-grey-light;
    line-height: 1.15;
    font-size: 1rem;

    :first-child {
      border-right: solid 1px rgba($color-grey-light, 0.15);
    }
  }
}
</style>
