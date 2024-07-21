<script setup>
import { computed } from 'vue';
import { CONTACT} from "@/constants/contact";

const buttomImage = computed(() => CONTACT.buttom_image);
const title = computed(() => CONTACT.title);
</script>
<template>
    <section class="bg-primary w-full">
        Foto de los 3 men
    </section>
    <section class="bg-primary w-full">
        Slider
    </section>
    <section class="bg-white w-full">
       <section class="py-10">
            <h1 class="text-center text-5xl font-bold text-sky-200">{{ title }}</h1>
       </section>
       <section class="w-full bg-sky-100 flex justify-center ">
            <form class="p-20 rounded-lg w-4/5">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                    <div>
                        <label for="nombre-completo" class="block text-gray-700 mb-2">Nombre completo</label>
                        <input type="text" id="nombre-completo" class="border border-gray-300 p-2 w-full rounded">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="correo" class="block text-gray-700 mb-2">Correo</label>
                        <input type="email" id="correo" class="border border-gray-300 p-2 w-full rounded">
                    </div>
                    <div>
                        <label for="telefono" class="block text-gray-700  mb-2">Teléfono</label>
                        <input type="tel" id="telefono" class="border border-gray-300 p-2 w-full rounded">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <div class="mb-4">
                            <label for="estado" class="block text-gray-700 mb-2">Estado</label>
                            <input type="text" id="estado" class="border border-gray-300 p-2 w-full rounded">
                        </div>
                        <div class="mb-4">
                            <label for="sector-mercado" class="block text-gray-700  mb-2">Sector de mercado</label>
                            <input type="text" id="sector-mercado" class="border border-gray-300 p-2 w-full rounded" >
                        </div>
                        <div class="mb-4">
                            <label for="cantidad-piezas" class="block text-gray-700  mb-2">Cantidad de piezas</label>
                            <input type="number" id="cantidad-piezas" class="border border-gray-300 p-2 w-full rounded" >
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-700  mb-2 mt-8">¿Cómo fue que nos conociste?</label>
                        <div class="flex flex-col">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Google" class="mr-2"> Google
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Linkedin" class="mr-2"> Linkedin
                                </label>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Facebook" class="mr-2"> Facebook
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Instagram" class="mr-2"> Instagram
                                </label>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Recomendacion" class="mr-2"> Recomendación
                                </label>
                                <label class="mb-2">
                                    <input type="radio" name="conociste" value="Otro" class="mr-2"> Otro
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="mensaje" class="block text-gray-700  mb-2">Mensaje</label>
                    <textarea id="mensaje" class="border border-gray-300 p-2 w-full rounded" rows="4" ></textarea>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="bg-primary text-white  py-1 px-8 hover:bg-blue-700">Enviar</button>
                </div>
            </form>
       </section>
       <section class="w-full">
            <img :src="buttomImage" width="300">
       </section>
    </section>
</template>
<style scoped>

</style>

