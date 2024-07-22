<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { Post } from "../../models/post";
import Spinner from "../atoms/Spinner.vue";
import Modal from "./Modal.vue";

const props = defineProps<{ post: Post }>();
const { title, body, url } = props.post;
const imgSrc = `url(${url})`;
const isModalOpen = ref(false);
const isPictureLoaded = ref(false);

const handleClick = () => {
  isModalOpen.value = !isModalOpen.value;
  isPictureLoaded.value = false;
};
const handleImageLoad = () => {
  isPictureLoaded.value = true;
};
</script>

<template>
  <div class="postTile" @click="handleClick">
    <h1>{{ title }}</h1>
    <p>{{ `${body.slice(0, 80)}... Read more` }}</p>
  </div>
  <Modal class="modal" v-if="isModalOpen" :set-modal="handleClick">
    <div class="modalContent">
      <div v-if="isPictureLoaded" class="postTitleContainer">
        <h1>
          {{ post.title }}
        </h1>
        <XMarkIcon class="xIcon" @click="handleClick" />
      </div>
      <img @load="handleImageLoad" :src="post.url" alt="post image" />
      <p v-if="isPictureLoaded">{{ post.body }}</p>
      <Spinner v-if="!isPictureLoaded" />
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@use "../../styles/fontSizes.scss" as fs;
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
  .modalContent {
    min-height: 200px;
    p {
      font-size: fs.$sm;
      font-weight: 300;
    }
    img {
      width: 100%;
      max-height: 200px;
      margin: 10px 0 20px 0;
      object-fit: cover;
      border-radius: 10px;
    }
    .postTitleContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .xIcon {
        max-width: 40px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
