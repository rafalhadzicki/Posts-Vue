<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { Post } from "../../models/post";
import Spinner from "../atoms/Spinner.vue";

type PostBodyTemplateProps = {
  post: Post;
  onClose: () => void;
};
const props = defineProps<PostBodyTemplateProps>();
const { post, onClose } = props;
const isPictureLoaded = ref(false);

const handleClick = () => {
  onClose();
};
</script>

<template>
  <div class="modalContent">
    <div v-if="isPictureLoaded" class="postTitleContainer">
      <h1>
        {{ post.title }}
      </h1>
      <XMarkIcon class="xIcon" @click="handleClick" />
    </div>
    <img
      @load="() => (isPictureLoaded = true)"
      :src="post.url"
      alt="post image"
    />
    <p v-if="isPictureLoaded">{{ post.body }}</p>
    <Spinner v-if="!isPictureLoaded" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/fontSizes.scss" as fs;
.modalContent {
  min-height: 200px;
  p {
    font-size: fs.$sm;
    font-weight: 300;
  }
  h1 {
    font-size: fs.$md;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
</style>
