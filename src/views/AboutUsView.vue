<template>
  <div class="relative">
    <div class="banner__container relative">
      <img class="w-full" loading="lazy" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-3.01.31%E2%80%AFp.m.png">
    </div>
    <div class="relative py-20">
      <h1 class="text-center text-sky-300 text-6xl font-bold mb-8">Nosotros</h1>
      <p class="text-center text-4xl font-semibold text-primary">
        El mejor tiempo de entrega en la industria es de Fortelite
      </p>
      <BarComponent position="top-left" height="20" width="320" inverted />
    </div>
    <!-- <div class="pb-10">
      <img class="w-full h-[700px]" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/iStock-1214894854-scaled.jpg"/>
    </div> -->

    <template>
  <fwb-carousel :pictures="pictures" />
</template>


    <ContainerComponent class="pb-20">
      <h2 class="text-primary text-center text-5xl font-bold mb-8">Nuestra Historia</h2>
      <p class="text-2xl">
        Fortelite surge de la necesidad de etiquetas especializadas para diversos tipos de industria, nuestro equipo
        de expertos ha recorrido un largo camino en la búsqueda de la alta calidad y excelencia en cada producto
        que fabricamos, para asegurar así más resistencia, seguridad y una aliada silenciosa en ventas.
      </p>
      <img src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Time-Line-Fortelite-Nosotros-e1723228748654.png" />
    </ContainerComponent>
    <hr class="my-10">
    <ContainerComponent class="pt-8 pb-20">
      <h2 class="text-sky-300 text-center text-5xl font-bold mb-8">Certificaciones:</h2>
      <div class="flex flex-col justify-center text-lg">
        <div class="grid gap-4 certifications">
          <img class="w-full aspect-square object-contain" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/1.png" />
          <p>
            <span class="text-primary font-bold">ISO 9001:2015:</span>
            Estándar internacional enfocado en proporcionar productos y/oservicios que cumplan con los requerimientos internos y
            externos de maneraeficaz para controlar y mejorar su rendimiento.
          </p>
        </div>
        <div class="grid gap-4 certifications">
          <img class="mx-auto w-6/12 aspect-square object-contain" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/2.png" />
          <p>
            <span class="text-primary font-bold">UL:</span>
            Norma que garantiza el cumplimiento de requisitos aplicables aproductos con respecto a su potencial riesgo de incendio, descarga
            eléctrica y peligros mecánicos.
          </p>
        </div>
        <div class="grid gap-4 certifications">
          <img class="w-full aspect-square object-contain" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/rohs-icon-symbol-vector.jpg" />
          <p>
            <span class="text-primary font-bold">RoHS:</span>
            Restringe sustancias peligrosas en productos electrónicos, como plomo y mercurio, para proteger la salud y el medio ambiente,
            promoviendo la seguridad y la sostenibilidad.
          </p>
        </div>
        <div class="grid gap-4 certifications">
          <img class="mx-auto w-9/12 aspect-square object-contain" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/fsc-3-logo-png-transparent.png" />
          <p>
            <span class="text-primary font-bold">FSC:</span>
            Asegura que los materiales provienen de bosques gestionados de manera responsable, promoviendo la conservación ambiental y el
            desarrollo social y económico sostenible
          </p>
        </div>
      </div>
    </ContainerComponent>
    <img class="w-2/12 absolute bottom-0 left-0 -z-10" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-21-a-las-12.46.58%E2%80%AFp.m-e1721587699795.png" loading="lazy">
  </div>
  <div>
    <carousel :items-to-show="itemsToShow"
  :breakpoints="{
    768: {
      itemsToShow: 1
    },
    1024: {
      itemsToShow: 4
    }
  }">
      <slide v-for="(video, idx) in carouselVideos" :key="idx">
        <div class="carousel__item">
          <video controls width="300px" height="400px" autoplay loop muted>
              <source :src="video.src" :type="video.type">
              Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import BarComponent from '@/components/common/BarComponent.vue';
import ContainerComponent from '@/components/common/ContainerComponent.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { HOME_CAROUSEL_VIDEOS } from "@/constants";

const carouselVideos = computed(() => {
  return HOME_CAROUSEL_VIDEOS.map((video) => {
    return {
      src: video.src,
      type: video.type,
    };
  });
});

import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: 'https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Time-Line-Fortelite-Nosotros-e1723228748654.png', alt: 'Image 1'},
  // {src: '/images/img-2.svg', alt: 'Image 2'},
  // {src: '/images/img-3.svg', alt: 'Image 3'},
]

</script>
<style scoped>
.certifications {
  grid-template-columns: 60px 1fr;
}
</style>
