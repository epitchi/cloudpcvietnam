<template>
    <div class="most-popular">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading-section">
            <h4><em>Most Popular</em> Right Now</h4>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="game in games" :key="game.title">
              <div class="item">
                <img src="../assets/images/popular-01.jpg" alt="logo" />
                <h4>{{ game.title }}<br /><span>{{ game.genre }}</span></h4>
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
  const games = [
    { image: "../assets/images/popular-01.jpg", title: 'Fortnite', genre: 'Sandbox' },
    { image: '../assets/images/popular-02.jpg', title: 'PubG', genre: 'Battle S' },
    { image: '../assets/images/popular-03.jpg', title: 'Dota2', genre: 'Steam-X' },
    { image: '../assets/images/popular-04.jpg', title: 'CS-GO', genre: 'Legendary' },
    { image: '../assets/images/popular-05.jpg', title: 'Mini Craft', genre: 'Legendary' },
    { image: '../assets/images/popular-06.jpg', title: 'Eagles Fly', genre: 'Matrix Games' },
    { image: '../assets/images/popular-07.jpg', title: 'Warface', genre: 'Max 3D' },
    { image: '../assets/images/popular-08.jpg', title: 'Warcraft', genre: 'Legend' },
  ];
  </script>
  
  <style scoped>
  @import url('../assets/css/templatemo-cyborg-gaming.css');
  @import "../assets/vendor/bootstrap/css/bootstrap.min.css";
  </style>
  