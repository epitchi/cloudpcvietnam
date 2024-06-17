import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Replace with your actual components
// import Browse from './views/Browse.vue';
// import Details from './views/Details.vue';
// import Streams from './views/Streams.vue';
// import Profile from './views/Profile.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
//   { path: '/browse', name: 'Browse', component: Browse }
//   { path: '/details', name: 'Details', component: Details },
//   { path: '/streams', name: 'Streams', component: Streams },
//   { path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;