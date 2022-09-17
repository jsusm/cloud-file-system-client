<script setup>
import { FolderIcon } from 'vue-tabler-icons'
import ActionIcon from './ui/ActionIcon.vue';
import { TrashIcon } from 'vue-tabler-icons'

defineProps(['name'])
defineEmits(['delete'])
</script>
<template>
  <button class="container">
    <FolderIcon class="folderIcon" size="24" /><span>{{ name }}</span>
    <ActionIcon @click.stop="$emit('delete')" title="delete" variant="outline" class="delete-button">
      <TrashIcon size="16" />
    </ActionIcon>
  </button>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  border: none;
  column-gap: 1rem;
  width: 100%;
  background-color: var(--sage3);
  border-radius: 8px;
  color: var(--sage10);
  outline: 2px solid transparent;
  transition: outline .2s ease, color .1s ease;
  position: relative;
}

.container:hover {
  background-color: var(--sage4);
}

.container:active {
  background-color: var(--sage5);
}

.container:focus {
  color: var(--teal9);
  outline: 2px solid var(--teal8);
}

.folderIcon {
  min-width: 24px;
}

.container>span {
  color: var(--sage11);
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.delete-button {
  position: absolute;
  right: 4px;
  top: 4px;
}
</style>
