<script setup>
import { reactive, ref } from 'vue'
import Button from '../ui/Button.vue'
import InputWrapper from '../ui/InputWrapper.vue'
import FileInput from '../ui/FileInput.vue'
import Spinner from '../ui/Spinner.vue'
import { loadFiles } from '../../store/fileList'

const props = defineProps({
  path: {
    type: String,
    required: true,
  }
})
const emit = defineEmits(['done'])

const input = ref(null)
const sendFileState = reactive({
  error: '',
  loading: false,
})

async function onSubmit() {
  const data = new FormData()
  for (const file of input.value.input.files) {
    data.append('files', file)
  }
  sendFileState.loading = true
  const res = await fetch(`http://192.168.0.105:8080/browse/${props.path}`, {
    method: 'post',
    body: data,
  })
  sendFileState.loading = false
  if(res.status != 201){
    if(res.status == 400){
      sendFileState.error = 'Some of the file uploaded is too large :('
    } else {
      sendFileState.error = 'Ops! there was an error uploading your file.' 
    }
    return
  }
  emit('done')
  await loadFiles(props.path)
}

</script>
<template>
  <form @submit.prevent="onSubmit">
    <div v-if="sendFileState.loading" class="loader-container">
      <Spinner />
    </div>
    <InputWrapper v-else label="Files" :error="sendFileState.error" :required="true">
      <FileInput ref="input" />
    </InputWrapper>
    <div class="flex content-right">
      <Button>Send</Button>
    </div>
  </form>
</template>
<style scoped>
._title {
  font-weight: 600;
  font-size: 1.2em;
}
.loader-container {
  width: 18rem;
  height: 4em;
  display: grid;
  place-items: center;
}
</style>
