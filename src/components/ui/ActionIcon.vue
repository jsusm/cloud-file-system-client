<script setup>
const props = defineProps(['variant'])
</script>
<template>
  <button class="button" :class="{ outline: variant=='outline'}">
    <slot/>
  </button>
</template>
<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  min-width: 28px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: var(--teal2);
  cursor: pointer;
  color: var(--teal11);
  transition: border .2s ease, background-color .2s ease;
}
.button:hover{
  background-color: var(--teal4);
  outline: none;
}
.button:active{
  background-color: var(--teal5);
  outline: none;
}
.outline {
  color: var(--sage11);
  border: 1px solid var(--sage7);
  background-color: transparent;
}
.outline:active{
  background-color: var(--sage5);
}
.outline:hover{
  background-color: var(--sage4);
}
</style>
