<template>
  <div
    class="bar"
    :class="[props.position, {
      'inverted': props.inverted
    }]"
    :style="`
      --width: ${props.width}px;
      --height: ${props.height}px;
    `"
  ></div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  width: {
    type: Number,
    default: 16,
  },
  height: {
    type: Number,
    default: 100,
  },
  position: {
    type: String,
    default: "top-right"
  },
  inverted: {
    type: Boolean,
    default: false,
  }
});
</script>
<style lang="scss" scoped>
.bar {
  --width: 16px;
  --height: 100px;

  position: absolute;
  width: var(--width);
  height: var(--height);
  background-color: var(--sky-300);
  border-bottom-left-radius: 12px;

  &.top-right {
    top: 0;
    right: 0;
  }

  &.top-left {
    top: 0;
    left: 0;
  }

  &.inverted {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 12px;
  }
}
</style>