<script setup>
import { theme } from '../../store/theme.js'
</script>
<template>
  <div id="themeProvider" :class="{'dark-theme': theme.valueOf() == 'dark'}">
    <slot />
  </div>
</template>
