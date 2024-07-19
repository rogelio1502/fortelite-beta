<template>
  <footer class="bg-primary py-20">
    <ContainerComponent class="footer__container grid gap-10 text-white">
      <article>
        <h2 class="mb-4 font-semibold">Grupo Fortelite México</h2>
        <nav>
          <ul class="flex flex-col font-light">
            <li>www.foterlite.mx</li>
            <li class="inline-flex flex-col self-baseline">
              Teléfono: +52 8118725333
              <span class="self-end">+52 8183624116</span>
            </li>
            <li>
              <a href="mailto:info@fortelit.mx">info@fortelit.mx</a>
            </li>
            <li class="mt-4">Texcoco #57, Col. Paraíso</li>
            <li>Guadalupe, N.L., México</li>
          </ul>
        </nav>
      </article>
      <article>
        <h2 class="mb-4 font-semibold">Nosotros</h2>
        <nav>
          <ul class="flex flex-col gap-5 font-light">
            <li>
              <RouterLink to="/">¿Quienes somos?</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Contacto</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Ubicación</RouterLink>
            </li>
          </ul>
        </nav>
      </article>
      <article>
        <h2 class="mb-4 font-semibold">Soluciones</h2>
        <nav>
          <ul class="flex flex-col gap-1 font-light">
            <li>Etiquetas removibles y reposicionables</li>
            <li>Etiquetas para impresora láser</li>
            <li>Etiquetas sensibles a la presión</li>
            <li>Etiquetas "Placard label holder"</li>
            <li>Etiquetas Place label here</li>
            <li>Etiquetas permanentes</li>
            <li>Etiquetas resistentes a la temperatura</li>
          </ul>
        </nav>
      </article>
      <article>
        <h2 class="mb-4 font-semibold">!SÍGUENOS!</h2>
        <nav>
          <ul>
            <li>FB</li>
          </ul>
        </nav>
      </article>
    </ContainerComponent>
  </footer>
</template>
<script setup>
import ContainerComponent from "./ContainerComponent.vue";
</script>
<style lang="scss" scoped>
.footer__container {
  grid-template-columns: auto auto auto auto;
}
</style>