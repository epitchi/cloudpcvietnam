<template>
    <div class="gaming-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4><em>Your Gaming</em> Library</h4>
        </div>
        <div class="item" v-for="game in games" :key="game.title">
          <ul>
            <li><img :src="game.image" alt="" class="templatemo-item" /></li>
            <li><h4>{{ game.title }}</h4><span>{{ game.genre }}</span></li>
            <li><h4>Date Added</h4><span>{{ game.dateAdded }}</span></li>
            <li><h4>Hours Played</h4><span>{{ game.hoursPlayed }}</span></li>
            <li><h4>Currently</h4><span>Downloaded</span></li>
            <li><div class="main-border-button border-no-active"><a href="#">Downloaded</a></div></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="main-button">
          <a href="profile.html">View Your Library</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const games = [
    {
      image: 'assets/images/game-01.jpg',
      title: 'Dota 2',
      genre: 'Sandbox',
      dateAdded: '24/08/2036',
      hoursPlayed: '634 H 22 Mins',
    },
    {
      image: 'assets/images/game-02.jpg',
      title: 'Fortnite',
      genre: 'Sandbox',
      dateAdded: '22/06/2036',
      hoursPlayed: '740 H 52 Mins',
    },
    {
      image: 'assets/images/game-03.jpg',
      title: 'CS-GO',
      genre: 'Sandbox',
      dateAdded: '21/04/2036',
      hoursPlayed: '892 H 14 Mins',
    },
  ];
  </script>
  
  <style scoped>
  @import url('../assets/css/templatemo-cyborg-gaming.css');
  @import "../assets/vendor/bootstrap/css/bootstrap.min.css";
  </style>
  