<template>
  <header class="header__container flex items-center gap-20 pl-20 pr-8">
    <RouterLink to="/">Fortelite</RouterLink>
    <nav class="ml-auto">
      <ul class="flex items-center gap-6">
        <li
          v-for="(navItem, navItemIndex) in navigationList"
          :key="`${navItem.text}_${navItemIndex}`"
        >
          <RouterLink
            :to="navItem.to"
            class="nav__link relative block px-8 py-8 cursor-pointer hover:bg-secondary font-semibold"
            :class="{
              'bg-secondary active': route.fullPath === navItem.to,
            }"
          >
            {{ navItem.text }}
          </RouterLink>
        </li>
        <li class="px-4 py-1 rounded bg-sky-100">ENG</li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();

const navigationList = [
  {
    text: "Inicio",
    to: "/",
  },
  {
    text: "Servicios",
    to: "/services",
  },
  {
    text: "Segmentos",
    to: "/segments",
  },
  {
    text: "Clientes",
    to: "/clients",
  },
  {
    text: "Sustentabilidad",
    to: "/sustentability",
  },
  {
    text: "Contacto",
    to: "/contact",
  },
  {
    text: "Blog",
    to: "/blog",
  },
];
</script>
<style lang="scss" scoped>
.nav__link {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #214583;
    opacity: 0;
  }

  &:hover::after, &.active::after {
    opacity: 1;
  }
}
</style>