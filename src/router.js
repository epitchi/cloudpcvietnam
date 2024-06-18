import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Replace with your actual components
import Browse from './views/Browse.vue';
import Profile from './views/Profile.vue';
import App from './App.vue';
import Login from './components/Login.vue';
import { pb } from './backend/createClient.ts';
import Payment from './views/Payment.vue';
// import Browse from './views/Browse.vue';
// import Details from './views/Details.vue';
// import Streams from './views/Streams.vue';
// import Profile from './views/Profile.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/browse', name: 'Browse', component: Browse },
  { path: '/payment', name: 'Payment', component: Payment},
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true } // Secure route, requires authentication
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
//   { path: '/details', name: 'Details', component: Details },
//   { path: '/streams', name: 'Streams', component: Streams },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check authentication status here
    const isAuthenticated = pb.authStore.isValid; // Implement based on your authentication state
    console.log(isAuthenticated)
    if (isAuthenticated) {
      next(); // Proceed to the route
    } else {
      next('/login'); // Redirect to login if not authenticated
    }
  } else {
    next(); // Allow access to non-secured routes
  }
});


export default router;