<script setup lang="ts">
import Card from "../atoms/Card.vue";
</script>

<template>
  <Card containerClass="backdrop" cardClass="modal"><slot /></Card>
</template>

<style lang="scss">
@use "../../styles/breakpoints" as bp;
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  height: auto;
  width: 50%;

  @media screen and (max-width: bp.$lg) {
    width: 70%;
  }

  @media screen and (max-width: bp.$sm) {
    width: 90%;
  }
}
</style>
