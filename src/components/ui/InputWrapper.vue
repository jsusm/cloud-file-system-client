<script setup>
defineProps(['label', 'description', 'error', 'required'])
</script>
<template>
  <div class="container">
    <label class="label" :class="{ required: required }">{{ label }}</label>
    <p class="description">{{ description }}</p>
    <slot>
    </slot>
    <p class="error">{{ error }}</p>
  </div>
</template>
<style scoped>
.container {
  padding: 0 0 1em 0;
}
.label {
  font-size: 14px;
}
.description {
  color: var(--sage9);
  font-size: 12px; 
  margin-bottom: 4px;
}
.error {
  color: var(--red9);
  font-size: 12px; 
  margin-top: 4px;
}
.required::after {
  content: ' *';
  color: var(--red9);
}
</style>
