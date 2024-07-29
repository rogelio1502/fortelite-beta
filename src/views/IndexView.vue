<template>
  <div class="video__container text-white text-center pt-10">
    Componente de Video
  </div>
  <div class="relative">
    <ContainerComponent tag="article" class="grid product__container py-0">
      <div>
        <img loading="lazy" class="w-full aspect-auto" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/MOCKUP-PILLS-BOTTLE_Colored-2.png" />
      </div>
      <div class="self-center">
        <h2 class="text-sky-300 text-5xl font-semibold">Fortelite</h2>
        <p class="text-2xl text-blue mt-2 font-semibold">
          Expertos en etiquetas industriales y especializadas
        </p>
        <p class="text-xl mt-3">
          Ofrecemos soluciones de etiquetas y placas metálicas impresas
          especializadas para la identificación de productos y control de procesos
          a nivel mundial. Esforzándonos día a día por ser los mejores líderes en
          el mercado de la industria de impresión de etiquetas.
        </p>
      </div>
    </ContainerComponent>
    <BarComponent position="top-left" height="20" width="320" inverted />
  </div>
  <div class="bg-primary py-10">
    <ContainerComponent>
      <h2 class="text-center text-5xl text-white font-semibold mb-12">
        Segmentos
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-16">
        <div
          v-for="(segment, segmentIndex) in HOME_SEGMENTS"
          :key="`${segment.text}_${segmentIndex}`"
          class="text-center"
        >
          <h3 class="text-white text-lg font-semibold">{{ segment.text }}</h3>
        </div>
      </div>
    </ContainerComponent>
  </div>
  <div class="relative">
    <ContainerComponent class="py-10">
      <h2 class="text-center text-5xl text-primary font-semibold mb-12">
        Servicios
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-16">
        <div
          v-for="({ text, src }, serviceIndex) in HOME_SERVICES"
          :key="`${text}_${serviceIndex}`"
          class="text-center"
        >
          <img class="w-9/12 aspect-square rounded-full mx-auto mb-6" :src="src">
          <h3 class="text-sky-300 text-center text-2xl font-semibold">
            {{ text }}
          </h3>
        </div>
      </div>
      <p class="text-xl text-center w-7/12 mt-12 mb-24 mx-auto">
        Fortelite ofrece soluciones de impresión de etiquetas guiadas a través de
        asesoría personalizada, brindando opciones de materiales de la más alta
        calidad con certificaciones que lo avalan, asegurando distinción, alta
        definición de impresión y los mejores tiempos de entrega del mercado.
      </p>
    </ContainerComponent>
    <img class="absolute bottom-0 left-0 -z-10" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-12.46.58%E2%80%AFp.m-e1721587699795.png" loading="lazy">
  </div>
  <hr>
  <ContainerComponent class="py-8">
    <h2 class="text-sky-300 text-2xl text-center font-semibold">Algunos de nuestros clientes</h2>
  </ContainerComponent>
</template>
<script setup>
import BarComponent from "@/components/common/BarComponent.vue";
import ContainerComponent from "@/components/common/ContainerComponent.vue";
import { HOME_SEGMENTS, HOME_SERVICES } from "@/constants";
</script>
<style lang="scss" scoped>
.video__container {
  height: 500px;
  background-color: #214583;
}

.product__container {
  grid-template-columns: 1fr 1fr;
}
</style>
