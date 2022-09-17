<script setup>
</script>
<template>
  <div class="i"></div>
</template>
<style scoped>
.i {
  width: 25px;
  height: 15px;
  background-color: var(--mint7);
  position: relative;
  border-radius: 8px 0 8px 0;
  margin-inline: .5em;
}

.i::before,
.i::after {
  content: '';
  width: 25px;
  height: 15px;
  position: absolute;
  border-radius: 8px 0 8px 0;
}

.i::after {
  background-color: var(--teal9);
  top: -5px;
}

.i::before {
  background-color: var(--mint5);
  top: 5px;
  z-index: -1;
}

</style>
