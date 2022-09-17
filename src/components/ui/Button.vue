<template>
  <button class="button">
    <slot />
  </button>
</template>
<style scoped>
.button {
  background-color: var(--teal3);
  color: var(--teal11);
  border: none;
  padding: 0px 12px;
  border-radius: 8px;
  font-weight: 600;
  height: 36px;
  font-size: 14px;
  user-select: none;
  line-height: 1;
  flex-grow: 0;
  cursor: pointer;
}
.button:hover {
  background-color: var(--teal4);
}
.button:active {
  background-color: var(--teal5);
}
</style>
