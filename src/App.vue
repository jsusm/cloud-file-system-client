<script setup>
import Header from './components/layout/Header.vue'
import Modal from './components/Modal.vue'
import AddFileForm from './components/layout/AddFileForm.vue'
import AddFolderForm from './components/layout/AddFolderForm.vue'
import { usePath } from './composable/path'
import { useToggle } from './composable/toggle'
import { loadFiles } from './store/fileList'
import DirectoryList from './components/layout/DirectoryList.vue'
import ActionIcon from './components/ui/ActionIcon.vue';
import { ArrowUpIcon, RefreshIcon } from 'vue-tabler-icons'
import Theme from './components/layout/Theme.vue'

const { path, moveIntoDirectory, upDir } = usePath()
const [uploadFileModal, toggleUploadFileModal] = useToggle()
const [createFolderModal, toggleCreateFolderModal] = useToggle()

</script>
<template>
  <Theme>
    <Header @add-file="toggleUploadFileModal" @add-folder="toggleCreateFolderModal" />
    <div class="container">
      <div class="path-input-container">
        <span class="pathPrefix">Path: </span>
        <span class="beginPath">/</span>
        <input v-model="path" class="path-input" type="text">
        <ActionIcon @click="() => loadFiles(path)" class="mi1">
          <RefreshIcon size="16" />
        </ActionIcon>
        <ActionIcon @click="upDir">
          <ArrowUpIcon size="16" />
        </ActionIcon>
      </div>
      <DirectoryList @goto-dir="moveIntoDirectory" :path="path" />
    </div>
    <Modal :open="uploadFileModal" title="Add File" @close="toggleUploadFileModal">
      <AddFileForm :path="path" @done="toggleUploadFileModal" />
    </Modal>
    <Modal :open="createFolderModal" title="Create Folder" @close="toggleCreateFolderModal">
      <AddFolderForm :path="path" @done="toggleCreateFolderModal" />
    </Modal>
  </Theme>
</template>
<style>
.container {
  max-width: 1000px;
  margin: auto;
  padding-top: 2em;
  padding-inline: 2rem;
  padding-bottom: 3rem;
}

.path-input-container {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: var(--sage11);
  display: flex;
  align-items: center;
}

.path-input-container>.beginPath {
  color: var(--sage12)
}

.path-input {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: transparent;
  font-weight: 500;
  border: none;
  outline: 0;
  font-size: 16px;
  color: var(--sage12);
  width: 100%;
}

.title {
  margin-block: 1em;
  font-weight: 600;
}


.directoryContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  gap: 1em;
  justify-content: center;
}

.file-list-move,
.file-list-enter-active,
.file-list-leave-active {
  transition: all .5s ease;
}

.file-list-enter-from,
.file-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
