<template>
  <SegmentTemplate v-if="currentSegment" :segment="currentSegment" />
  <div clasS="py-28" v-else>
    <p class="text-center text-primary text-3xl font-semibold">No se encontro el segmento.</p>
  </div>
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