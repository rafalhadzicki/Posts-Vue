<script setup lang="ts">
import { computed, Ref } from "vue";
import { PageDirections } from "../../constants/pageDirections";
import StyledButton from "../atoms/StyledButton.vue";

const props = defineProps<{ pageSetter: () => Ref<number> }>();
const { pageSetter } = props;
const handlePageChange = (
  direction: PageDirections.Next | PageDirections.Previous
) => {
  const page = pageSetter();
  if (direction === PageDirections.Next && page.value < 10) {
    page.value++;
  } else if (direction === PageDirections.Previous && page.value > 1) {
    page.value--;
  }
};
const isButtonDisabled = computed(() => {
  const page = pageSetter();
  return {
    [PageDirections.Previous]: page.value === 1,
    [PageDirections.Next]: page.value === 10,
  };
});
</script>

<template>
  <div class="postNavigationMainContainer">
    <StyledButton
      :disabled="isButtonDisabled[PageDirections.Previous]"
      @click="() => handlePageChange(PageDirections.Previous)"
      >{{ PageDirections.Previous }}</StyledButton
      additionalStyle="additionalStyle"
    >
    <StyledButton
      :disabled="isButtonDisabled[PageDirections.Next]"
      @click="() => handlePageChange(PageDirections.Next)"
      >{{ PageDirections.Next }}</StyledButton
    >
  </div>
</template>

<style scoped lang="scss">
.postNavigationMainContainer {
display: flex;
height: 100%;
gap:10px;
justify-content: center;
align-items: flex-end;
margin-top: 20px;
}
</style>
