<template>
  <div class="">
    <header class="header__container flex items-center gap-20 pl-20 pr-8">
      <RouterLink to="/">
        <img class="w-[100px] h-[72px]" src="https://lawngreen-wallaby-976278.hostingersite.com/wp-content/uploads/2024/08/Logo-Fortelite-01.png" />
      </RouterLink>
      <nav class="ml-auto">
        <ul class="hidden lg:flex items-center gap-0">

          <li
            v-for="(navItem, navItemIndex) in navigationList"
            :key="`${navItem.text}_${navItemIndex}`"
            class="relative"
          >
            <RouterLink
              :to="navItem.to"
              class="nav__link relative block px-8 py-6 cursor-pointer hover:bg-secondary font-semibold"
              :class="{
                'bg-secondary active': route.path == navItem.to || (route.path.includes('segments') && navItem.to.includes('segments')),
              }"
              @mouseover="navItem.text === 'Segmentos' ? showDropdown = true : ''"
              @mouseleave="navItem.text === 'Segmentos' ? showDropdown = false : ''"
            >
              {{ navItem.text }}
              <!-- Dropdown for Segments -->
              <div
                v-if="navItem.text === 'Segmentos' && showDropdown"
                class="dropdown absolute top-full left-0 bg-white border rounded shadow-lg"
              >
                <RouterLink
                  v-for="(segment, index) in segments"
                  :key="index"
                  :to="segment.to"
                  class="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                >
                  {{ segment.text }}
                </RouterLink>
              </div>
            </RouterLink>
          </li>
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

    <div :class="menuOpen ? 'block' : 'hidden'" class="lg:hidden flex flex-col space-y-2 mt-2">
      <RouterLink
        v-for="(navItem, navItemIndex) in navigationList"
        :key="`${navItem.text}_${navItemIndex}`"
        :to="navItem.to"
        class="text-black bg-blue-700 p-2 rounded"
      >
        {{ navItem.text }}
      </RouterLink>
      <!-- Dropdown for mobile view
      <div v-if="menuOpen && activeDropdown === 'Segmentos'" class="flex flex-col mt-2 space-y-2">
        <RouterLink
          v-for="(segment, index) in segments"
          :key="index"
          :to="segment.to"
          class="text-black bg-gray-200 p-2 rounded"
        >
          {{ segment.text }}
        </RouterLink>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuOpen = ref(false)
const showDropdown = ref(false)
// const activeDropdown = ref('')

const navigationList = [
  { text: "Inicio", to: "/" },
  { text: "Servicios", to: "/services" },
  { text: "Segmentos", to: "/segments" },
  { text: "Nosotros", to: "/clients" },
  { text: "Contacto", to: "/contact" },
]

const segments = [
  {text: "Alimentos y Bebidas", to: "/segments/alimentos-y-bebidas"},
  { text: "Industrial", to: "/segments/industrial" },
  {text: "Automotriz", to: "/segments/automotriz"},
  {text: "Vinos y Licores", to: "/segments/vinos-y-licores"},
  {text: "Salud y Belleza", to: "/segments/salud-y-belleza"},
  {text: "Hogar", to: "/segments/hogar"},
  {text: "Farmacéutica", to: "/segments/farmaceutica"},
  {text: "Entretenimiento", to: "/segments/entretenimiento"},
  {text: "Logistica", to: "/segments/logistica"},
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}



// function showSegmentDropdown() {
//   activeDropdown.value = 'Segmentos'
// }
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

  &:hover::after{
    opacity: .5;
  }

  &.active::after {
    opacity: 1;
  }
}

.dropdown {
  z-index: 1000;
  cursor: pointer;
}
</style>
