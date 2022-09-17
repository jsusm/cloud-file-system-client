import { ref, onMounted, onUnmounted } from 'vue'


export function usePath() {
  const path = ref(window.location.pathname.slice(1))
  
  function onPopState(e) {
    if (e.state) {
      console.log('pop state', e.state.path)
      path.value = e.state.path
    }
  }
  onMounted(() => {
    addEventListener('popstate', onPopState)
  })
  onUnmounted(() => {
    removeEventListener('popstate', onPopState)
  })

  function moveIntoDirectory(dir, isDir) {
    if (!isDir) {
      // redirect to raw file
      window.location.href = `http://192.168.0.105:8080/browse/${path.value}/${dir}`
      return
    }
    if (path.value.endsWith("/") || path.value == '') {
      path.value = path.value.concat(`${dir}/`)
    } else {
      path.value = path.value.concat(`/${dir}/`)
    }
    window.history.pushState({ path: path.value }, "vite + vue", `/${path.value}`)
  }

  function upDir() {
    const sections = path.value.split('/')
    if (path.value.endsWith('/')) {
      path.value = sections.slice(0, sections.length - 2).join('/')
    } else {
      path.value = sections.slice(0, sections.length - 1).join('/')
    }
    if (path.value.length != 0) {
      path.value = path.value.concat('/')
    }
    window.history.pushState({ path: path.value }, "vite + vue", `/${path.value}`)
  }

  return { path, upDir, moveIntoDirectory}
}
