<template>
  <div id="browse">
    <router-view>
    <Preloader />
    <Header />
    <main>
      <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <!-- Featured Games -->
              <div class="row">
                <div class="col-lg-8">
                  <div class="featured-games header-text">
                    <div class="heading-section">
                      <h4><em>Featured</em> Games</h4>
                    </div>
                    <div class="owl-features owl-carousel">
                      <!-- Featured Game Items -->
                      <div class="item" v-for="(game, index) in featuredGames" key="index">
                        <div class="thumb">
                          <img src="../assets/images/featured-02.jpg" alt="">
                          <div class="hover-effect">
                            <h6>2.4K Streaming</h6>
                          </div>
                        </div>
                        <h4>{{ game.title }}<br><span>{{ game.downloads }}</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> {{ game.rating }}</li>
                          <li><i class="fa fa-download"></i> {{ game.downloads }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <!-- Top Downloaded Games -->
                  <div class="top-downloaded">
                    <div class="heading-section">
                      <h4><em>Top</em> Downloaded</h4>
                    </div>
                    <ul>
                      <li v-for="(game, index) in topDownloadedGames" :key="index">
                        <img src="../assets/images/game-01.jpg" alt="" class="templatemo-item">
                        <h4>{{ game.title }}</h4>
                        <h6>{{ game.genre }}</h6>
                        <span><i class="fa fa-star" style="color: yellow;"></i> {{ game.rating }}</span>
                        <span><i class="fa fa-download" style="color: #ec6090;"></i> {{ game.downloads }}</span>
                        <div class="download">
                          <a href="#"><i class="fa fa-download"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="text-button">
                      <router-link to="/profile">View All Games</router-link>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Start Stream Section -->
              <div class="start-stream">
                <div class="col-lg-12">
                  <div class="heading-section">
                    <h4><em>How To Start Your</em> Live Stream</h4>
                  </div>
                  <div class="row">
                    <!-- Stream Steps -->
                    <div class="col-lg-4" v-for="(step, index) in startStreamSteps" :key="index">
                      <div class="item">
                        <div class="icon">
                          <img src="../assets/images/service-01.jpg" alt="" style="max-width: 60px; border-radius: 50%;">
                        </div>
                        <h4>{{ step.title }}</h4>
                        <p>{{ step.description }}</p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="main-button">
                        <router-link to="/profile">Go To Profile</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Live Stream Section -->
              <div class="live-stream">
                <div class="col-lg-12">
                  <div class="heading-section">
                    <h4><em>Most Popular</em> Live Stream</h4>
                  </div>
                </div>
                <div class="row">
                  <!-- Popular Live Streams -->
                  <div class="col-lg-3 col-sm-6" v-for="(stream, index) in popularStreams" :key="index">
                    <div class="item">
                      <div class="thumb">
                        <img src="../assets/images/stream-01.jpg" alt="">
                        <div class="hover-effect">
                          <div class="content">
                            <div class="live">
                              <a href="#">Live</a>
                            </div>
                            <ul>
                              <li><a href="#"><i class="fa fa-eye"></i> {{ stream.views }}</a></li>
                              <li><a href="#"><i class="fa fa-gamepad"></i> {{ stream.game }}</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="down-content">
                        <div class="avatar">
                          <img src="../assets/images/avatar-01.jpg" alt="" style="max-width: 46px; border-radius: 50%; float: left;">
                        </div>
                        <span><i class="fa fa-check"></i> {{ stream.username }}</span>
                        <h4>{{ stream.title }}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="main-button">
                      <router-link to="/streams">Discover All Streams</router-link>
                    </div>
                  </div>
                </div>
              </div>
              
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
import Header from '../components/Header.vue';

  const featuredGames = [
    { title: 'CS-GO', downloads: '249K Downloads', rating: '4.8' },
    { title: 'Gamezer', downloads: '249K Downloads', rating: '4.8' },
    { title: 'Island Rusty', downloads: '249K Downloads', rating: '4.8' },
    // Add more games as needed
  ];
  
  const topDownloadedGames = [
    { title: 'Fortnite', genre: 'Sandbox', rating: '4.9', downloads: '2.2M' },
    { title: 'CS-GO', genre: 'Legendary', rating: '4.9', downloads: '2.2M' },
    { title: 'PugG', genre: 'Battle Royale', rating: '4.9', downloads: '2.2M' },
    // Add more games as needed
  ];
  
  const startStreamSteps = [
    { title: 'Go To Your Profile', description: 'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.' },
    { title: 'Live Stream Button', description: 'If you wish to support us, you can make a <a href="https://paypal.me/templatemo" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com' },
    { title: 'You Are Live', description: 'You are not allowed to redistribute this template\'s downloadable ZIP file on any other template collection website.' },
  ];
  
  const popularStreams = [
    { username: 'KenganC', title: 'Just Talking With Fans', views: '1.2K', game: 'CS-GO' },
    { username: 'LunaMa', title: 'CS-GO 36 Hours Live Stream', views: '1.2K', game: 'CS-GO' },
    { username: 'Areluwa', title: 'Maybe Nathej Allnight Chillin\'', views: '1.2K', game: 'CS-GO' },
    { username: 'GangTm', title: 'Live Streaming Till Morning', views: '1.2K', game: 'CS-GO' },
    // Add more streams as needed
  ];
  
  </script>
  <script>
  export default {
    name: 'Browse',
  };
  </script>
  <style scoped>
  /* Add any custom styles specific to this component */
  </style>