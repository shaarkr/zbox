<template>
  <!-- Default Post Editor -->
  <form class="form" v-if="!edit">
    <div class="input-group">
      <i class="input-prepend far fa-comment-alt"></i>
      <input
        type="text"
        placeholder="Got something to say?"
        class="input-control"
        @focus="edit = !edit"
      />
    </div>
    <button class="btn btn-small btn-icon">
      <i class="fa fa-share-square"></i>
    </button>
  </form>

  <!-- Expanded Post Editor in Edit Mode -->
  <form class="editor" v-if="edit" @submit.prevent="handlePost">
    <div class="editor-group">
      <!-- Wrapper with Padding -->
      <div class="editor-wrapper">
        <textarea
          v-model="postData"
          type="text"
          placeholder="Got something to say?"
          rows="1"
          cols="32"
          class="editor-control"
        >
        </textarea>
      </div>
      <div class="editor-actions">
        <button type="submit" class="editor-submit">Post</button>
        <button type="reset" class="editor-cancel" @click="resetEditor">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  emits: ['post'],
})
export default class InputPost extends Vue {
  edit = false
  postData = ''

  handlePost(): void {
    this.$emit('post', this.postData)
    this.resetEditor()
  }

  resetEditor(): void {
    this.edit = false
    this.postData = ''
  }
}
</script>

<style lang="scss" scoped>
.form {
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;

  .btn-small {
    max-height: 2.5rem;
    height: 100%;
    width: 2.5rem;
    box-shadow: none;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    transition: background-color 100ms ease-out;

    &:hover {
      background-color: rgba($color-accent, 0.8);
    }
  }
}

.input {
  &-group {
    position: relative;
    flex: 1;
    height: 100%;
    color: $color-grey-light;
  }

  &-control {
    height: 100%;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.625rem;
    padding-left: 2.35rem;
    padding-right: 0.75rem;
    background-color: $color-primary-light;
    border: none;
    outline: none;
    font: inherit;
    font-size: 0.9rem;
    line-height: 1.25;
    color: currentColor;
    transition: background-color 100ms ease-out;

    &:hover {
      cursor: pointer;
      background-color: $color-primary;
    }
  }

  &-prepend {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem;
  }
}

.editor {
  &-group {
    position: relative;
    flex: 1;
    height: 100%;
    color: $color-grey-light;
  }

  &-wrapper {
    padding: 2rem;
    background-color: $color-primary-light;
  }

  &-control {
    height: 8rem;
    width: 100%;
    background-color: $color-primary-light;
    font: inherit;
    font-size: 0.9rem;
    line-height: 1.25;
    color: $color-grey-light;
    scrollbar-width: thin;
    resize: none;
  }

  &-actions {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: solid 1px rgba($color-grey-light, 0.25);
  }

  &-submit,
  &-cancel {
    flex: 1;
    height: 100%;
    background-color: $color-primary-light;
    color: $color-grey-light;
    cursor: pointer;

    &:hover {
      background-color: rgba($color-grey-dark, 0.8);
      color: rgba($color-grey-light, 0.7);
    }
  }

  &-submit {
    border-right: solid 1px rgba($color-grey-light, 0.25);
  }
}
</style>
