<template>
    <div class="most-popular">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading-section">
            <h4><em>Các tựa game</em> hỗ trợ </h4>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6" v-for="store in stores" :key="store.id">
              <div class="item">
                <img :src="store.logo" alt="logo" />
                <h4>{{ store.name }}<br /><span>{{ store.publisher }}</span></h4>
                <ul>
                  <li><i class="fa fa-star"></i> 4.8</li>
                  <li><i class="fa fa-download"></i> 2.3M</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="main-button">
                <a href="browse.html">Discover Popular</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
  export default {
  }
</script>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { getStore } from '../backend/api.ts'
  
  const route = useRoute()

  const loading = ref(false)
  const stores = ref(null)
  const error = ref(null)

  watch(() => route.params.id, fetchData, { immediate: true })

  async function fetchData(id) {
    error.value = stores.value = null
    loading.value = true
    
    try {
      // replace `getPost` with your data fetching util / API wrapper
      stores.value = await getStore()  
      console.log(stores.value)
    } catch (err) {
      error.value = err.toString()
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  @import url('../assets/css/templatemo-cyborg-gaming.css');
  @import "../assets/vendor/bootstrap/css/bootstrap.min.css";
  </style>
  