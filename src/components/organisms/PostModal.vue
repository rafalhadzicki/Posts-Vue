<script setup lang="ts">
import { Post } from "../../models/post";

const props = defineProps<{ post: Post }>();
const { title, body } = props.post;
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/fontSizes.scss" as fs;

h1 {
  font-size: fs.$lg;
  font-weight: 500;
}
p {
  font-size: fs.$xs;
  font-weight: 300;
}
</style>
