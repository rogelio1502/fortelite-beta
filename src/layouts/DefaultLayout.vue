<template>
  <div class="flex flex-col flex-1">
    <HeaderComponent />
    <slot />
    <FooterComponent class="mt-auto" />
  </div>
</template>
<script setup>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
</script>