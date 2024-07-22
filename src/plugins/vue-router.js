import { createWebHistory, createRouter } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import ClientsView from '@/views/ClientsView.vue'
import SegmentsView from '@/views/SegmentsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', component: IndexView },
  { path: '/segments/:segment_slug', component: SegmentsView },
  { path: '/clients', component: ClientsView },
  { path: '/services', component: ServicesView },
  { path: '/:catchAll(.*)', redirect: '/'},
  { path: '/contact', component: ContactView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router