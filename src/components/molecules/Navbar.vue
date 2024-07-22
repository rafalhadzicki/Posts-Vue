<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { RoutePaths } from "../../constants/routes";
</script>
<template>
  <nav class="navbar">
    <RouterLink :to="RoutePaths.Home"><button>Home</button></RouterLink>
    <RouterLink :to="RoutePaths.About"><button>About</button></RouterLink>
  </nav>
</template>
<style scoped lang="scss">
@use "../../styles/breakpoints" as bp;
.navbar {
  position: absolute;
  top: 0;
  background-color: #333;
  color: white;
  display: flex;
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media screen and (min-width: bp.$sm) {
    padding: 0 5% 0 5%;
  }
  @media screen and (min-width: bp.$lg) {
    padding: 0 10% 0 10%;
  }
  button {
    padding: 10px;
  }
}
</style>
