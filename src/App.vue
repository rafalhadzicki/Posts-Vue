<script setup lang="ts">
import { RouterView } from "vue-router";
import Card from "./components/atoms/Card.vue";
import Navbar from "./components/molecules/Navbar.vue";
</script>

<template>
  <Navbar />
  <Card>
    <RouterView />
  </Card>
</template>
