<template>
  <div class="video__container text-white text-center pt-10">
    Componente de Video
  </div>
  <ContainerComponent tag="article" class="grid product__container py-20">
    <div></div>
    <div>
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
  <ContainerComponent class="py-10">
    <h2 class="text-center text-5xl text-primary font-semibold mb-12">
      Servicios
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-y-16">
      <div
        v-for="({ text }, serviceIndex) in HOME_SERVICES"
        :key="`${text}_${serviceIndex}`"
        class="text-center"
      >
        <h3 class="text-sky-300 text-center text-2xl font-semibold">
          {{ text }}
        </h3>
      </div>
    </div>
    <p class="text-lg text-center w-7/12 mt-12 mb-24 mx-auto">
      Fortelite ofrece soluciones de impresión de etiquetas guiadas a través de
      asesoría personalizada, brindando opciones de materiales de la más alta
      calidad con certificaciones que lo avalan, asegurando distinción, alta
      definición de impresión y los mejores tiempos de entrega del mercado.
    </p>
  </ContainerComponent>
  <hr>
  <ContainerComponent class="py-8">
    <h2 class="text-sky-300 text-2xl text-center font-semibold">Algunos de nuestros clientes</h2>
  </ContainerComponent>
</template>
<script setup>
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
