import { ref } from 'vue'

export function useToggle() {
  const value = ref(false)
  const toggle = () => {
    value.value = !value.value
  }

  return [ value, toggle ]
}
