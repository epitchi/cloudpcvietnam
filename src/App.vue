<template>
  <div id="app">
    <Preloader />
    <Header />
    <main>
      <MainBanner />
      <MostPopular />
      <GamingLibrary />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import MainBanner from './components/MainBanner.vue'
import MostPopular from './components/MostPopular.vue'
import GamingLibrary from './components/GamingLibrary.vue'
import Footer from './components/Footer.vue'
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-cyborg-gaming.css";
import "./assets/css/owl.css";
import "./assets/css/animate.css";
import "../node_modules/swiper/swiper-bundle.min.css";

</script>

<style>
/* Add your global styles here */
</style>