<script setup lang="ts">
import { useGetPosts } from "../api/posts";
import Spinner from "../components/atoms/Spinner.vue";
import PostTile from "../components/molecules/PostTile.vue";

const { posts, isPostsloading } = useGetPosts(1);
</script>

<template>
  <div class="homeMainContainer">
    <h1>Posts</h1>
    <div v-if="!isPostsloading" class="postsContainer">
      <PostTile v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <Spinner v-else />
  </div>
</template>

<style scoped lang="scss">
@use "../styles/fontSizes" as fs;
@use "../styles/breakpoints" as bp;
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
