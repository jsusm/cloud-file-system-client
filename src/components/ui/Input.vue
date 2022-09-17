<script setup>
import { ref } from 'vue'
const input = ref(null)
defineProps(['error', 'modelValue'])
defineEmits(['update:modelValue'])

defineExpose({
  input
})

</script>
<template>
  <input 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
    class="input" :class="{ error: error }" 
    type="text"
    v-bind="$attrs"
  />
</template>
<style scoped>
.input {
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--sage7);
  border-radius: 8px;
  font-size: 14px;
  transition: border .1s ease;
  background-color: var(--sage1);
  color: var(--sage12);
}
.input:focus, .input:active{
  outline:none;
  border-color: var(--teal8);
}
.input::placeholder{
  color: var(--sage8);
}
.error {
  border: 1px solid var(--red8);
  color: var(--red9);
}
.error::placeholder {
  color: var(--red8);
}
.error:focus, .error:active {
  border: 1px solid var(--red9);
}
</style>
