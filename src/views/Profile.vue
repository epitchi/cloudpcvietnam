<template>
    <div>
        <Preloader/>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <!-- ***** Banner Start ***** -->
              <div class="row">
                <div class="col-lg-12">
                  <div class="main-profile">
                    <div class="row">
                      <div class="col-lg-4">
                        <img
                          src="../assets/images/profile.jpg"
                          alt=""
                          style="border-radius: 23px"
                        />
                      </div>
                      <div class="col-lg-4 align-self-center">
                        <div class="main-info header-text">
                          <span>Offline</span>
                          <h4>Alan Smithee</h4>
                          <p>
                            You Haven't Gone Live yet. Go Live By Touching The
                            Button Below.
                          </p>
                          <div class="main-border-button">
                            <a href="#">Start Live Stream</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 align-self-center">
                        <ul>
                          <li>Games Downloaded <span>3</span></li>
                          <li>Friends Online <span>16</span></li>
                          <li>Live Streams <span>None</span></li>
                          <li>Clips <span>29</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="clips">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="heading-section">
                                <h4><em>Your Most Popular</em> Clips</h4>
                              </div>
                            </div>
                            <div class="col-lg-3 col-sm-6" v-for="clip in clips" :key="clip.id">
                              <div class="item">
                                <div class="thumb">
                                  <img src="../assets/images/clip-01.jpg" :alt="clip.title" style="border-radius: 23px" />
                                  <a :href="clip.url" target="_blank"><i class="fa fa-play"></i></a>
                                </div>
                                <div class="down-content">
                                  <h4>{{ clip.title }}</h4>
                                  <span><i class="fa fa-eye"></i> {{ clip.views }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="main-button">
                                <a href="#">Load More Clips</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ***** Banner End ***** -->
  
              <!-- ***** Gaming Library Start ***** -->
              <div class="gaming-library profile-library">
                <div class="col-lg-12">
                  <div class="heading-section">
                    <h4><em>Your Gaming</em> Library</h4>
                  </div>
                  <div class="item" v-for="game in games" :key="game.id">
                    <ul>
                      <li>
                        <img src="../assets/images/game-01.jpg" :alt="game.title" class="templatemo-item" />
                      </li>
                      <li>
                        <h4>{{ game.title }}</h4>
                        <span>{{ game.genre }}</span>
                      </li>
                      <li>
                        <h4>Date Added</h4>
                        <span>{{ game.dateAdded }}</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4>
                        <span>{{ game.hoursPlayed }}</span>
                      </li>
                      <li>
                        <h4>Currently</h4>
                        <span>{{ game.status }}</span>
                      </li>
                      <li>
                        <div class="main-border-button border-no-active">
                          <a href="#">Downloaded</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- ***** Gaming Library End ***** -->
            </div>
          </div>
        </div>
      </div>
  
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p>
                Copyright © 2036
                <a href="#">Cyborg Gaming</a> Company. All rights reserved.
                <br />
                Design:
                <a
                  href="https://templatemo.com"
                  target="_blank"
                  title="free CSS templates"
                  >TemplateMo</a
                >
                Distributed By
                <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
import Preloader from '../components/Preloader.vue';
  
  export default {
    name: 'Profile',
    components: {
      Header
    },
    data() {
      return {
        clips: [
          { id: 1, title: 'First Clip', views: 250, image: 'assets/images/clip-01.jpg', url: 'https://www.youtube.com/watch?v=r1b03uKWk_M' },
          { id: 2, title: 'Second Clip', views: 183, image: 'assets/images/clip-02.jpg', url: 'https://www.youtube.com/watch?v=r1b03uKWk_M' },
          { id: 3, title: 'Third Clip', views: 141, image: 'assets/images/clip-03.jpg', url: 'https://www.youtube.com/watch?v=r1b03uKWk_M' },
          { id: 4, title: 'Fourth Clip', views: 91, image: 'assets/images/clip-04.jpg', url: 'https://www.youtube.com/watch?v=r1b03uKWk_M' }
        ],
        games: [
          { id: 1, title: 'Dota 2', genre: 'Sandbox', dateAdded: '24/08/2036', hoursPlayed: '634 H 22 Mins', status: 'Downloaded', image: 'assets/images/game-01.jpg' },
          { id: 2, title: 'Fortnite', genre: 'Sandbox', dateAdded: '22/06/2036', hoursPlayed: '745 H 22 Mins', status: 'Downloaded', image: 'assets/images/game-02.jpg' },
          { id: 3, title: 'CS-GO', genre: 'Sandbox', dateAdded: '21/04/2022', hoursPlayed: '632 H 46 Mins', status: 'Downloaded', image: 'assets/images/game-03.jpg' }
        ]
      };
    },
    methods: {
      handleSearch(event) {
        if (event.key === 'Enter') {
          // Perform search action
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>