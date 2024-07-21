<template>
  <div class="wha-icon">
    <a
      href="https://api.whatsapp.com/send?phone=528135433600"
      target="_blank"
      title="Enviar Mensaje"
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
