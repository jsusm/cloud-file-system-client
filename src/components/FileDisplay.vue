<script setup>
import {
  FileCodeIcon,
  FileTextIcon,
  FileTypographyIcon,
  FileZipIcon,
  HeadphonesIcon,
  PhotoIcon,
  VideoIcon,
  TrashIcon,
  CloudDownloadIcon,
} from 'vue-tabler-icons'
import ActionIcon from './ui/ActionIcon.vue';

const props = defineProps(['name', 'type'])
defineEmits(['delete', 'download'])

function GetIcon(type) {
  if (type.startsWith("image/")) return PhotoIcon
  if (type.startsWith("audio/")) return HeadphonesIcon
  if (type.startsWith("video/")) return VideoIcon
  if (type.startsWith("application/zip")) return FileZipIcon
  if (type.startsWith("application/pdf")) return FileTextIcon
  if (type.startsWith("application/")) return FileCodeIcon
  if (type.startsWith("font/")) return FileTypographyIcon
  return FileTextIcon
}
let icon = GetIcon(props.type)
</script>
<template>
  <button class="fileDisplayContainer">
    <div class="file-type-icon">
      <component :is="icon" size="28" stroke-width='2' />
    </div>
    <div class="description">
      <span>{{ name }}</span>
    </div>
    <ActionIcon @click.stop="$emit('download')" title="download" variant="outline" class="download-button">
      <CloudDownloadIcon size="16" />
    </ActionIcon>
    <ActionIcon @click.stop="$emit('delete')" title="delete" variant="outline" class="delete-button">
      <TrashIcon size="16" />
    </ActionIcon>
  </button>
</template>
<style scoped>
.fileDisplayContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: var(--sage3);
  border: none;
  border-radius: 8px;
  outline: 2px solid transparent;
  transition: outline .2s ease, color .1s ease;
  height: 126px;
}

.fileDisplayContainer:hover {
  background-color: var(--sage4);
}

.fileDisplayContainer:active {
  background-color: var(--sage5);
}

.fileDisplayContainer:focus {
  outline: 2px solid var(--teal8);
}

.fileDisplayContainer:focus .file-type-icon {
  color: var(--teal11);
}

.fileDisplayContainer .file-type-icon {
  margin-inline: auto;
  margin-top: auto;
  margin-bottom: 2em;
  color: var(--sage11);
}

.fileDisplayContainer .description {
  padding: 1em;
  padding-top: 0;
  font-size: 12px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: left;
  color: var(--sage12);
}

.delete-button {
  position: absolute;
  right: 4px;
  top: 4px;
}
.download-button {
  position: absolute;
  right: 36px;
  top: 4px;
}

</style>
