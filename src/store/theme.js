import { ref } from 'vue'

const configuredTheme = window.localStorage.getItem('theme')
export const theme = ref(configuredTheme || 'light')

export function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  window.localStorage.setItem('theme', theme.value)
}
