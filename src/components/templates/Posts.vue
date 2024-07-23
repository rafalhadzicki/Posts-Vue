<script setup lang="ts">
import { UseQueryReturnType } from "@tanstack/vue-query";
import { Ref, watch } from "vue";
import { Post } from "../../models/post";
import Spinner from "../atoms/Spinner.vue";
import PostsNavigation from "../molecules/PostsNavigation.vue";
import PostTile from "../organisms/PostTile.vue";

type PostsTemplateProps = {
  postsQuery: UseQueryReturnType<Post[], Error>;
  pageSetter: () => Ref<number>;
};
const props = defineProps<PostsTemplateProps>();
const { data: posts, isPending } = props.postsQuery;
watch(isPending, () => {
  console.log("pending", isPending.value);
});
</script>

<template>
  <div class="homeMainContainer">
    <div v-if="posts" class="postsContainer">
      <h1>Posts</h1>
      <PostTile v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <PostsNavigation v-if="posts" :page-setter="pageSetter" />
    <Spinner v-if="isPending" />
    <!-- TODO: Add error component -->
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/fontSizes" as fs;
@use "../../styles/breakpoints" as bp;
.homeMainContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  h1 {
    font-size: fs.$lg;
    font-weight: 500;
    grid-column: 1/-1;
    text-align: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
.postsContainer {
  display: grid;
  grid-auto-rows: min-content;
  gap: 10px;
  width: 100%;
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
