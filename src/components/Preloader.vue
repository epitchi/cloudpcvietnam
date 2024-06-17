<template>
  <div id="js-preloader" class="js-preloader" v-if="isLoading">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// const isLoading = ref(true)

onMounted(() => {
  window.addEventListener('load', () => {
    // isLoading.value = false
  })

  // isLoading.value = true
})
</script>

<style scoped>
/* Add your preloader styles here */
@import "../assets/vendor/bootstrap/css/bootstrap.min.css";

</style>
