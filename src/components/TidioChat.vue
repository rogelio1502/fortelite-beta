<!-- src/components/TidioChat.vue -->
<template>
    <div></div>
  </template>
  
  <script>
  import { MAIN } from '@/constants/main';
  export default {
    mounted() {
      this.loadTidioScript();
    },
    methods: {
      loadTidioScript() {
        const tidioScript = document.createElement('script');
        tidioScript.src = 'https://code.tidio.co/' + MAIN.tidio_code + '.js';
        tidioScript.async = true;
        document.body.appendChild(tidioScript);
      }
    }
  }
  </script>
  