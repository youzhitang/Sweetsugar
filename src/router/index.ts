import Vue from 'vue';
import Labels from '@/views/Labels.vue';
import Money from '@/views/Money.vue';
import Notfound from '@/views/Notfound.vue';
import Statistics from '@/views/Statistics.vue';
import VueRouter from 'vue-router';
import EditLabels from '@/views/EditLabels.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/Labels/edit',
    component: EditLabels
  },
  {
    path: '*',
    component: Notfound
  }
];

const router = new VueRouter({
  routes
});

export default router;
