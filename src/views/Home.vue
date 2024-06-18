<template>
  <div id="home">
    <router-view>
    <Preloader />
    <Header />
    <main>
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
    </main>
    <Footer />
  </router-view>
  </div>
</template>

<script setup>
import Preloader          from '../components/Preloader.vue'
import Header           from '../components/Header.vue'
import MainBanner           from '../components/MainBanner.vue'
import MostPopular          from '../components/MostPopular.vue'
import GamingLibrary          from '../components/GamingLibrary.vue'
import Footer           from '../components/Footer.vue'
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/fontawesome.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "../assets/css/templatemo-cyborg-gaming.css";

</script>
<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
.container {
  padding: 0 15px;
}

@media (max-width: 576px) {
  .container {
    padding: 0; /* Remove horizontal padding for small screens */
  }
}
</style>