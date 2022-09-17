<script setup>
import { onMounted, watch, ref } from 'vue';
import FolderDisplay from '../FolderDisplay.vue'
import FileDisplay from '../FileDisplay.vue'
import { fileListStorage as fls, loadFiles } from '../../store/fileList'
import { deleteFile } from '../../lib/files.js'
import { join } from '../../lib/join'
import Modal from '../Modal.vue';
import { useToggle } from '../../composable/toggle'
import Button from '../ui/Button.vue';
import { baseUrl } from '../../lib/files'

const props = defineProps(['path'])
defineEmits(['goto-dir'])

const [fileWarning, toggleFileWarning] = useToggle()
const selectedDirectoryName = ref('')

watch(props, async () => {
  loadFiles(props.path)
  console.log(!fls.dirs.files)
})

onMounted(async () => {
  await loadFiles(props.path)
})

function openWarning(dirName) {
  toggleFileWarning()
  selectedDirectoryName.value = dirName
}
function cancelWarning(){
  toggleFileWarning()
  selectedDirectoryName.value = ''
}

async function onDelete(fileName) {
  toggleFileWarning()
  await deleteFile(join([props.path, fileName]))
  loadFiles(props.path)
}
async function onDownload(fileName) {
  const destination = `${baseUrl}${join([props.path, fileName])}?action=download`
  window.location.href = destination
}

</script>
<template>
  <p class="info" v-if="fls.error">{{ fls.error }}</p>
  <p class="info" v-if="!fls.dirs.directories && !fls.dirs.files && !fls.loading && !fls.error">
    This directory is empty, click on the top right buttons to upload files or create a folder
  </p>
  <Transition name="fade-down">
    <div v-if="fls.dirs.directories && !fls.loading">
      <h2 class="title">Directories</h2>
      <div class="directories-container">
        <FolderDisplay v-for="d in fls.dirs.directories" @click="$emit('goto-dir', d.name, true)"
          @delete="() => openWarning(d.name)" :key="d.name" :name="d.name" />
      </div>
    </div>
  </Transition>
  <Transition name="fade-down">
    <div v-if="fls.dirs.files && !fls.loading">
      <h2 class="title">Files</h2>
      <div class="files-container">
        <FileDisplay v-for="f in fls.dirs.files" @click="$emit('goto-dir', f.name, false)"
          @delete="() => openWarning(f.name)" @download="() => onDownload(f.name)" :key="f.name" :name="f.name"
          :type="f.type" />
      </div>
    </div>
  </Transition>
  <Modal :open="fileWarning" title="Adventance" @close="toggleFileWarning">
    <p>Do you realy whant to delete: {{ join([path, selectedDirectoryName]) }} </p>
    <div class="mt3 flex content-right col-gap3">
      <Button @click="cancelWarning">Cancel</Button>
      <Button @click="() => onDelete(selectedDirectoryName)">Delete</Button>
    </div>
  </Modal>
</template>
<style scoped>
.directories-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.files-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1rem;
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity .2s ease-out, transform .2s ease-out;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-down-enter-active {
  transition-delay: 100ms;
}

.info {
  text-align: center;
  color: var(--teal11);
  margin-block: 1em;
  font-size: 1.22em;
  font-weight: 600;
}

.title {
  color: var(--sage11)
}
</style>
