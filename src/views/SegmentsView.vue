<template>
  <SegmentTemplate :segment="currentSegment" />
</template>
<script setup>
import { computed } from 'vue';
import SegmentTemplate from '@/components/segments/SegmentTemplate.vue';
import { useRoute } from 'vue-router'
import { AVAILABLE_SEGMENTS } from '@/constants/segments';

const route = useRoute();

const currentSegment = computed(() => {
  return AVAILABLE_SEGMENTS[route.params.segment_slug];
});
</script>