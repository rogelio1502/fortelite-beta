<template>
  <div class="wha-icon">
   
    <a
      :href="whaHref"
      target="_blank"
      title="Contact us on WhatsApp"
      ><i class="fab fa-whatsapp"></i
    ></a>
    <TidioChat />
  </div>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TidioChat from "@/components/TidioChat.vue";
import "@/assets/main.css";
import { MAIN } from "@/constants/main";
import { computed } from "vue";

const whaHref = computed(() => "https://api.whatsapp.com/send?phone=" + MAIN.wha_phone);
</script>

<style >

.wha-icon {
  position: fixed;
  z-index: 100;
  bottom: 8rem;
  right: 2rem;
}
.wha-icon a {
  font-size: 3.5rem;
}
.wha-icon a :hover {
  font-size: 4rem;
  transition: 1s;
}
.wha-icon a i {
  color: #25D366;
}

</style>
