<script lang="ts" setup>
defineProps<{ additionalStyle?: string }>();
</script>

<template>
  <button :class="['styledButton', additionalStyle]"><slot /></button>
</template>

<style lang="scss" scoped>
.styledButton {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    background-color: #494646;
  }
  &:disabled {
    background-color: #666;
    &:hover {
      cursor: not-allowed;
      background-color: #666;
    }
  }
}
</style>
