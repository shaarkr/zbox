<template>
  <div class="profile">
    <div class="profile-icon">
      <img
        src="https://picsum.photos/200.webp"
        alt="profile image"
        class="profile-image"
        :class="{ edge: type === 'connect' }"
      />
    </div>

    <div class="profile-wrapper" v-if="show && type !== 'connect'">
      <p class="profile-info">
        <span class="id">WonPlus1</span>
        <span class="name">sharath kumar</span>
      </p>
      <p class="profile-points">
        <i class="icon-points fab fa-google"></i>
        <span>0</span>
      </p>
    </div>
    <div class="profile-wrapper" v-else-if="type === 'connect'">
      <p class="profile-info">
        <span class="id">WonPlus1</span>
      </p>
      <p class="profile-points">
        <small>Xbox App</small>
      </p>
    </div>

    <i class="profile-dropdown fa fa-angle-down" v-if="type === 'connect'"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'drawer',
    },
  },
})
export default class Profile extends Vue {
  show!: boolean
  type!: string
}
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0rem 0.75rem;
  margin: 0.5rem 0;

  &-icon {
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-image {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    object-fit: cover;

    &.edge {
      border: solid 2px $color-accent;
    }
  }

  &-wrapper {
    margin-left: 1rem;
    flex: 1;
    cursor: default;
  }

  &-info {
    margin-bottom: 4px;
    display: flex;
    flex-wrap: wrap;

    .id {
      margin-right: 0.5rem;
      font-weight: 600;
    }
  }

  /* TODO: Update Styles */
  &-points {
    display: flex;
    align-items: flex-end;
    line-height: 1;

    .icon-points {
      font-size: 0.75rem;
      margin-right: 5px;
      margin-bottom: 1px;
    }

    small {
      color: rgba($color-grey-light, 0.5);
    }
  }

  &-dropdown {
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    width: 2rem;
    cursor: pointer;
  }
}
</style>
