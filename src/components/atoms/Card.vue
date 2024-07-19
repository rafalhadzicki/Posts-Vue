<script setup lang="ts">
type CardProps = {
  containerClass?: string;
  cardClass?: string;
};
const props = defineProps<CardProps>();
const { containerClass, cardClass } = props;
</script>

<template>
  <div :class="['cardMainContainer', containerClass]">
    <div :class="['card', cardClass]">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
@use "../../styles/breakpoints" as bp;
.cardMainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  border-radius: 10px;
  height: 90%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 20px;
  @media screen and (max-width: bp.$sm) {
    width: 100%;
    box-shadow: none;
    background-color: #ffffff;
  }
  @media screen and (min-width: bp.$sm) {
    width: 90%;
  }
  @media screen and (min-width: bp.$lg) {
    width: 80%;
  }
}
</style>
