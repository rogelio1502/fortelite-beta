
<template>
    <!-- <div class="hidden lg:inline-flex"></div> -->
    <div class="">
    <header class="header__container flex items-center gap-20 pl-20 pr-8">
      <RouterLink to="/">
        <img class="w-[100px] h-[72px]" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Logo-Fortelite-01.png" />
      </RouterLink>
      <nav class="ml-auto">
        <ul class="hidden lg:flex items-center gap-1">
          <li
            v-for="(navItem, navItemIndex) in navigationList"
            :key="`${navItem.text}_${navItemIndex}`"
          >
            <RouterLink
              :to="navItem.to"
              class="nav__link relative block px-8 py-6 cursor-pointer hover:bg-secondary font-semibold"
              :class="{
                'bg-secondary active': route.fullPath === navItem.to,
              }"
            >
              {{ navItem.text }}
            </RouterLink>
          </li>
          <li class="px-4 py-1 rounded bg-sky-100">ENG</li>
        </ul>

        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-black focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        

      </nav>

      
    </header>

    <div :class="menuOpen ? 'block' : 'hidden'" class="lg:hidden flex flex-col space-y-2 mt-2"  >
      <RouterLink
        v-for="(navItem, navItemIndex) in navigationList"
        :key="`${navItem.text}_${navItemIndex}`"
        :to="navItem.to"
        class="text-black bg-blue-700 p-2 rounded"
      >
        {{ navItem.text }}
      </RouterLink>
    </div>

  </div>
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
    to: "/segments/alimentos-y-bebidas",
  },
  {
    text: "Nosotros",
    to: "/clients",
  },
  {
    text: "Contacto",
    to: "/contact",
  },
];


import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
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