<script setup lang="ts">
import { useGetPosts } from "../api/posts";
import Posts from "../components/templates/Posts.vue";

const getPostsQuery = useGetPosts(1);
</script>

<template>
  <Posts :posts-query="getPostsQuery" />
</template>
