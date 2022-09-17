import { reactive } from 'vue'
import { fetchFiles } from '../lib/files'

export const fileListStorage = reactive({
  dirs: [],
  error: '',
  loading: false,
})

export const loadFiles = async (path) => {
  const defaultTime = 320
  fileListStorage.loading = true
  const start = new Date()
  const [data, err] = await fetchFiles(path)
  fileListStorage.error = err
  fileListStorage.dirs = data
  // default time for animation
  const end = new Date()
  const duration = new Date(end - start).getMilliseconds()
  if (duration < defaultTime){
    setTimeout(() => fileListStorage.loading = false, defaultTime - duration)
  }else {
    fileListStorage.loading = true
  }
}
