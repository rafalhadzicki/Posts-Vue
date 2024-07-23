<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { useGetComments } from "../../api/posts";
import { Post } from "../../models/post";
import Spinner from "../atoms/Spinner.vue";

type PostBodyTemplateProps = {
  post: Post;
  onClose: () => void;
};
const props = defineProps<PostBodyTemplateProps>();
const { post, onClose } = props;

const isPictureLoaded = ref(false);
const { comments, isCommentLoading } = useGetComments(post.id);

const handleClick = () => {
  onClose();
};
</script>

<template>
  <div class="modalContent">
    <div class="postTitleContainer">
      <h1>
        {{ post.title }}
      </h1>
      <XMarkIcon class="xIcon" @click="handleClick" />
    </div>
    <div class="postImgContainer">
      <img
        @load="() => (isPictureLoaded = true)"
        @error="() => (isPictureLoaded = true)"
        :src="post.url"
        alt="post image"
      />
      <Spinner v-if="!isPictureLoaded" />
    </div>
    <div class="bodyContainer">
      <p>{{ post.body }}</p>
      <h2>Comments</h2>
      <div class="commentsContainer">
        <div
          v-if="!isCommentLoading"
          v-for="comment in comments"
          :key="comment.id"
        >
          <h3>{{ comment.name }}</h3>
          <p>{{ comment.body }}</p>
          <p><b>By:</b> {{ comment.email }}</p>
        </div>
        <Spinner v-else />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/fontSizes.scss" as fs;
.modalContent {
  display: flex;
  flex-direction: column;
  min-height: 200px;
  p {
    font-size: 20px;
    font-weight: 300;
  }
  h1 {
    font-size: fs.$md;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .postImgContainer {
    position: relative;
    width: 100%;
    min-height: 200px;
    margin: 10px 0 20px 0;
    border-radius: 10px;
    overflow: hidden;
    background-color: #494646;
    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
    }
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
  .bodyContainer {
    gap: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    h2 {
      font-size: fs.$md;
      font-weight: 500;
    }
    .commentsContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-height: 50px;
      h3 {
        font-size: fs.$sm;
        font-weight: 500;
      }
      p {
        font-size: fs.$xs;
        font-weight: 300;
      }
      b {
        font-weight: 500;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
