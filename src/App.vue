<template>
  <div class="wha-icon">
    <a
      :href="whaHref"
      target="_blank"
      title="Contact us on WhatsApp"
      ><i class="fab fa-whatsapp"></i
    ></a>
  </div>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import "@/assets/main.css";
import { MAIN } from "@/constants/main";
import { computed } from "vue";

const whaHref = computed(() => "https://api.whatsapp.com/send?phone=" + MAIN.wha_phone);
</script>

<style >

.wha-icon {
  position: fixed;
  z-index: 100;
  bottom: 0px;
  right: 10px;
}
.wha-icon a {
  font-size: 75px;
}
.wha-icon a :hover {
  font-size: 90px;
  transition: 1s;
}
.wha-icon a i {
  color: #25D366;
}

</style>
