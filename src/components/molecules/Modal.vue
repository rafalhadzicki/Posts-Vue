<script setup lang="ts">
import Card from "../atoms/Card.vue";
type ModalProps = {
  setModal: (value: boolean) => void;
};

defineProps<ModalProps>();
</script>

<template>
  <div class="backdrop" @click="() => setModal(false)">
    <Card cardClass="styledCard"><slot /></Card>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/breakpoints" as bp;
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.styledCard {
  max-height: 600px;
  max-width: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: bp.$lg) {
    width: 70%;
  }

  @media screen and (max-width: bp.$sm) {
    width: 90%;
  }
}
</style>
