<template>
  <div class="spinner" />
</template>
<style scoped>
.spinner {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 3px solid var(--teal8);
  border-left-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
