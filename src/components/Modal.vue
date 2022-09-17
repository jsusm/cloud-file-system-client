<script setup>
import ActionIcon from './ui/ActionIcon.vue';
import { XIcon } from 'vue-tabler-icons'
defineProps(['open', 'title'])
defineEmits(['close'])
</script>
<template>
  <Transition name="outlet-fade">
    <div v-if="open" @click="$emit('close')" class="outlet">
      <Transition name="container-anim">
        <div @click.stop class="container">
          <div class="_header flex alg-items-center content-between">
            <span>{{ title }}</span>
            <ActionIcon @click="$emit('close')">
              <XIcon size="16" />
            </ActionIcon>
          </div>
          <div class="body">
            <slot />
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<style scoped>
.body {
  padding: 1.5rem;
}
._header {
  font-weight: 600;
  padding: .5em 1em 0em 1em;
}
.container {
  padding: 0rem;
  background-color: var(--sage1);
  border-radius: 1rem;
  max-width: 25em;
  min-width: 90%;
}
.outlet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0008;
  backdrop-filter: blur(3px);
  display: grid;
  place-content: center;
}

.outlet-fade-enter-active,
.outlet-fade-leave-active {
  transition: opacity .1s ease-out;
}

.outlet-fade-enter-from,
.outlet-fade-leave-to {
  opacity: 0;
}
</style>
