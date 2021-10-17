<template>
  <section class="section">
    <h2 class="section-title">Parties</h2>

    <!-- SHow Back Button -->
    <div class="back" v-if="showGroup || showParty" @click="back">
      <i class="fa fa-arrow-left"></i>
      <span>Back</span>
    </div>

    <!-- SHow Party Selection Modes -->
    <div class="section-actions" v-else>
      <button type="button" class="btn-form new" @click="showParty = true">
        Start a party
      </button>
      <button type="button" class="btn-form join" @click="showGroup = true">
        Looking for Group
      </button>
    </div>

    <!-- SHow Search Input for finding Groups -->
    <template v-if="showGroup">
      <search-input
        v-model.trim="searchInput"
        label="Choose a game"
        placeholder="Find a game"
        @search="handleSearch"
        class="section-search"
      />

      <!-- Games Search Results List -->
      <div class="section-results">
        <section-card :cards="gamesList" :large="true" />
      </div>
    </template>

    <!-- Games Create Party List -->
    <ul class="section-party" v-if="showParty">
      <li class="section-party-name">
        <p>WonPlus1's party</p>
        <small>1 person (joinable)</small>
      </li>
      <drawer-item
        v-for="item in partyOptions"
        :key="item.id"
        :dropdown="item.dropdown"
        :name="item.name"
        :icon="item.icon"
      />
      <profile type="connect" />
    </ul>

    <!-- Show Error Message -->
    <error-box
      v-if="error"
      icon="robot"
      message="Need more players?"
      description="Looking for Group can help you find people who play like you"
    />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SearchInput from '@/components/SearchInput.vue'
import SectionCard from '@/components/SectionCard.vue'
import DrawerItem from '@/components/DrawerItem.vue'
import Profile from '@/components/Profile.vue'
import ErrorBox from '@/components/ErrorBox.vue'
import { SectionCardType } from '@/constants/interfaces'

@Options({
  components: {
    SearchInput,
    SectionCard,
    DrawerItem,
    Profile,
    ErrorBox,
  },
})
export default class FriendsList extends Vue {
  showGroup = false
  showParty = false
  searchInput = ''
  error = false

  gamesList: SectionCardType[] = [
    {
      id: 1,
      icon: 'https://picsum.photos/350',
      message: 'Call of Duty: Modern Warfare 2',
      status: '',
    },
    {
      id: 2,
      icon: 'https://picsum.photos/400',
      message: 'Call of Duty: Modern Warfare 2',
      status: '',
    },
    {
      id: 3,
      icon: 'https://picsum.photos/380',
      message: 'Ludo King™',
      status: '',
    },
    {
      id: 4,
      icon: 'https://picsum.photos/410',
      message: 'Call of Duty 4: Modern Warfare',
      status: '',
    },
    {
      id: 5,
      icon: 'https://picsum.photos/420',
      message: 'Need for Speed: Rivals',
      status: '',
    },
  ]

  partyOptions = [
    {
      id: 1,
      icon: 'users',
      name: 'Looking for Group',
      route: '',
      dropdown: false,
    },
    { id: 2, icon: 'arrow-right', name: 'Invite', route: '', dropdown: true },
    {
      id: 3,
      icon: 'glass-cheers',
      name: 'Party options',
      route: '',
      dropdown: true,
    },
    {
      id: 4,
      icon: 'comments',
      name: 'Show text chat',
      route: '',
      dropdown: false,
    },
    {
      id: 5,
      icon: 'sign-out-alt',
      name: 'Leave party',
      route: '',
      dropdown: false,
    },
  ]

  handleSearch(query: string): void {
    if (!query) return
    // TODO: Filter Cards
    console.log(query)
  }

  back(): void {
    this.showGroup = false
    this.showParty = false
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

  &-party {
    width: calc(100% + 2rem);
    margin: 0 -1rem;

    &-name {
      padding: 0.5rem 1rem;
      background: $color-accent;

      p {
        font-size: 1.25rem;
      }
    }

    .item:hover {
      background-color: unset !important;
      color: rgba($color-grey-light, 0.6) !important;
    }
  }

  .back {
    height: 3rem;
    width: 6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    i {
      margin-right: 0.75rem;
    }

    span {
      font-size: 1rem;
    }

    &:hover {
      color: rgba($color-grey-light, 0.5);
    }
  }
}
</style>
