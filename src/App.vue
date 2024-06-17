<script setup>
// import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import MainBanner from './components/MainBanner.vue'
import MostPopular from './components/MostPopular.vue'
import GamingLibrary from './components/GamingLibrary.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- <Preloader /> -->
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <MainBanner />
          <MostPopular />
          <GamingLibrary />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://unpkg.com/swiper@7/swiper-bundle.min.css');
@import url('assets/css/fontawesome.css');
@import url('assets/css/templatemo-cyborg-gaming.css');
@import url('assets/css/owl.css');
@import url('assets/css/animate.css');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
