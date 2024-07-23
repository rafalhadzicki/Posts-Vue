<script lang="ts" setup>
import { ref } from "vue";
import { Post } from "../../models/post";
import Modal from "../molecules/Modal.vue";
import PostBody from "../templates/PostBody.vue";

const props = defineProps<{ post: Post }>();
const { title, body, url } = props.post;
const imgSrc = `url(${url})`;
const isModalOpen = ref(false);

const handleClick = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="postTile" @click="handleClick">
    <h1>{{ title }}</h1>
    <p>{{ `${body.slice(0, 80)}... Read more` }}</p>
  </div>
  <Modal class="modal" v-if="isModalOpen" :set-modal="handleClick">
    <PostBody :post="post" :onClose="handleClick" />
  </Modal>
</template>

<style lang="scss" scoped>
@use "../../styles/fontSizes.scss" as fs;
@use "../../styles/breakpoints.scss" as bp;
.postTile {
  background-color: #494646;
  background-image: v-bind(imgSrc);
  padding: 1rem;
  border-radius: 0.5rem;
  color: #f2f0f0;
  display: flex;
  min-width: 200px;
  max-width: 500px;
  height: 200px;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  overflow: hidden;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    transition: transform 0.3s;
    opacity: 0.8;
  }
  @media screen and (max-width: bp.$sm) {
    max-width: 100%;
  }
  h1 {
    font-size: fs.$md;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    font-size: fs.$xs;
    font-weight: 300;
  }
}
.modal {
  h1 {
    font-size: fs.$lg;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
