<script setup lang="ts">
import { ref } from "vue";
import { useGetPosts } from "../api/posts";
import Posts from "../components/templates/Posts.vue";

const page = ref(1);
const pageWrapper = () => page;
const getPostsQuery = useGetPosts(page);
</script>

<template>
  <Posts :page-setter="pageWrapper" :posts-query="getPostsQuery" />
</template>
