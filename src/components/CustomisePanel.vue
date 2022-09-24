<template>
  <div class="customise">
    <h3 class="customise-title">Activity feed preferences</h3>
    <label for="filters" class="customise-label">Include posts from:</label>
    <ul class="customise-filters" id="filters">
      <li class="item">
        <input
          type="checkbox"
          name="friends"
          id="cbFriends"
          class="item-check"
        />
        <label class="item-wrapper" for="cbFriends">
          <p class="item-name">Friends</p>
          <small class="item-subtitle">Show my friends' activity</small>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class DrawerItem extends Vue {}
</script>

<style lang="scss" scoped>
.customise {
  &-title {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  &-label {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  .item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &-check {
      outline: none;
      border: none;
      color: $color-grey-light;
    }

    &-wrapper {
      cursor: pointer;
    }

    &-subtitle {
      font-size: 0.8rem;
      color: $color-grey-light;
    }
  }
}
</style>
