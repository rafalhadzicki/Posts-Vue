<script setup lang="ts">
import { UseQueryReturnType } from "@tanstack/vue-query";
import { Post } from "../../models/post";
import Spinner from "../atoms/Spinner.vue";
import PostTile from "../molecules/PostTile.vue";

type PostsTemplateProps = {
  postsQuery: UseQueryReturnType<Post[], Error>;
};
const props = defineProps<PostsTemplateProps>();
const { data: posts, isLoading } = props.postsQuery;
</script>

<template>
  <div class="homeMainContainer">
    <h1>Posts</h1>
    <div v-if="posts" class="postsContainer">
      <PostTile v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <Spinner v-else-if="isLoading" />
    <!-- TODO: Add error component -->
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/fontSizes" as fs;
@use "../../styles/breakpoints" as bp;
.homeMainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  height: 100%;
  h1 {
    font-size: fs.$lg;
    font-weight: 500;
  }
}
.postsContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 10px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: bp.$sm) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: bp.$md) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: bp.$xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
