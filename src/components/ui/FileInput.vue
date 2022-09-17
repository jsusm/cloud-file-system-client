<script setup>
import { ref } from 'vue'
import { PhotoIcon } from 'vue-tabler-icons'


const input = ref(null)
const selectedFiles = ref({})

function onClick() {
  input.value.click()
}
function handleChange(e) {
  const fileList = e.target.files
  selectedFiles.value = fileList
}

defineExpose({
  input,
})
</script>
<template>
  <div class="_container">
    <button type="button" @click="onClick" class="button">
      <span v-if="Object.values(selectedFiles).length == 0" class="placeholder">Files to upload</span>
      <span class="file" v-for="file in Object.values(selectedFiles)">
        <PhotoIcon size="16" /><span> {{ file.name }}</span>
      </span>
    </button>
    <input type="file" multiple @change="handleChange" v-bind="$attrs" ref="input" class="input">
  </div>
</template>
<style scoped>
._container {
  position: relative;
}

.input {
  display: none;
}

.button {
  height: auto;
  min-height: 36px;
  width: 18rem;
  padding: 4px 12px;
  border: 1px solid var(--sage8);
  border-radius: 8px;
  font-size: 14px;
  transition: border .1s ease;
  background-color: transparent;
  line-height: 1.55;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button:focus,
.button:active {
  outline: none;
  border-color: var(--teal9);
}

.placeholder {
  color: var(--sage9);
}

.file-names {
  max-width: 100%;
}

.file {
  display: grid;
  grid-template-columns: 16px 1fr;
  padding: 3px 12px;
  column-gap: 6px;
  background-color: var(--sage3);
  color: var(--sage12);
  font-size: 12px;
  margin-block: .2rem;
  border-radius: 8px;
  align-items: center;
}

.file>span {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
