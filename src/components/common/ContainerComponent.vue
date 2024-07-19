<template>
  <component :is="tag" :class="['container', { 'container--fluid': props.fluid }]">
    <slot />
  </component>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "div",
  },
});
</script>
<style scoped>
.container {
  width: calc(100% - (var(--container-space) * 2));
  margin-inline: auto;
}

.container--fluid {
  max-width: 100%;
  width: 100%;
}

@media (max-width: 600px) {
  .container {
    --container-space: 16px;
  }
}

@media (min-width: 600px) {
  .container {
    --container-space: 56px;
  }
}

@media (min-width: 960px) {
  .container {
    --container-space: 44px;
  }
}

@media (min-width: 1280px) {
  .container {
    --container-space: 180px;
  }
}

@media (min-width: 1920px) {
  .container {
    --container-space: 240px;
  }
}
</style>
