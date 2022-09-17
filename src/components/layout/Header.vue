<script setup>
import { FolderPlusIcon, FilePlusIcon, SunIcon } from 'vue-tabler-icons'
import ActionIcon from '../ui/ActionIcon.vue'
import BrandIcon from '../BrandIcon.vue'
import { toggleTheme } from '../../store/theme'
defineEmits(['add-file', 'add-folder'])
</script>
<template>
  <header class="header">
    <div class="brand-container">
      <span class="brand-title">Clould File System</span>
      <BrandIcon />
    </div>
    <div class="right">
      <div class="flex col-gap1 mi3">
        <ActionIcon @click="toggleTheme">
          <SunIcon size="16" />
        </ActionIcon>
      </div>
      <div class="flex col-gap1">
        <ActionIcon @click="$emit('add-folder')">
          <FolderPlusIcon size="16" />
        </ActionIcon>
        <ActionIcon @click="$emit('add-file')">
          <FilePlusIcon size="16" />
        </ActionIcon>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header {
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.brand-container {
  display: flex;
  align-items: center;
}

.brand-title {
  display: none;
  font-size: 1.1rem;
  color: var(--sage12);
  font-weight: 600;
}

.header .right {
  display: flex;
  gap: .5em;
}

@media (min-width: 700px) {
  .brand-title {
    display: inline;
  }
}
</style>
