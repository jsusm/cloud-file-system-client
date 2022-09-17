<script setup>
import { onMounted, reactive, ref } from 'vue'
import Input from '../ui/Input.vue'
import InputWrapper from '../ui/InputWrapper.vue'
import Button from '../ui/Button.vue'
import Spinner from '../ui/Spinner.vue'
import { loadFiles } from '../../store/fileList'
import { createFolder } from '../../lib/files'
import { join } from '../../lib/join'

const props = defineProps({
  path: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['done'])
const input = ref(null)

onMounted(() => {
  input.value.input.focus()
})

const actionState = reactive({
  error: '',
  loading: '',
})

const folderName = ref('')

async function onSubmit() {
  actionState.loading = true
  actionState.error = await createFolder(join([props.path, folderName.value]))
  actionState.loading = false
  if (!actionState.error) {
    await loadFiles(props.path)
    emit('done')
  }
}

</script>
<template>
  <form @submit.prevent="onSubmit">
    <div v-if="actionState.loading" class="flex content-center alg-items-center">
      <Spinner />
    </div>
    <template v-else>
      <InputWrapper label="Name" :error="actionState.error">
        <Input v-model="folderName" ref="input" />
      </InputWrapper>
      <div class="flex content-right">
        <Button>Create</Button>
      </div>
    </template>
  </form>
</template>
<style>
</style>
