<template>
  <div id="profile">
    <router-view>
      <Preloader />
      <Header />
      <main>
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
                            src="../assets/images/stream-05.jpg"
                            alt="Profile Picture"
                            style="border-radius: 23px"
                          />
                        </div>
                        <div class="col-lg-4 align-self-center">
                          <div class="main-info header-text">
                            <span>{{ user.status }}</span>
                            <h4>{{ user.username }}</h4>
                            <p>{{ user.email }}</p>
                            <div class="main-border-button">
                              <a href="/payment">Đăng ký dịch vụ</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 align-self-center">
                          <ul>
                            <li>Gói mua <span>{{ user.plan }}</span></li>
                            <li>Số giờ còn lại <span>{{ user.remain_time }}</span></li>
                            <li>Tình trạng <span>{{ user.verify }}</span></li>
                            <!-- <li>Ngày tham gia <span>{{ user.created }}</span></li> -->
                          </ul>
                        </div>
                      </div>
                      <!-- <div class="row">
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
                                    <img :src="clip.imageUrl" :alt="clip.title" style="border-radius: 23px" />
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
                      </div> -->
                    </div>
                <!-- ***** Banner End ***** -->

                <!-- ***** Gaming Library Start ***** -->
                <!-- <div class="gaming-library profile-library">
                  <div class="col-lg-12">
                    <div class="heading-section">
                      <h4><em>Your Gaming</em> Library</h4>
                    </div>
                    <div class="item" v-for="game in games" :key="game.id">
                      <ul>
                        <li>
                          <img :src="game.imageUrl" :alt="game.title" class="templatemo-item" />
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
                </div> -->
                <!-- ***** Gaming Library End ***** -->
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
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Preloader from '../components/Preloader.vue';
import { getUserProfile } from '../backend/api';

const user = ref({});
const clips = ref([]);
const games = ref([]);


async function fetchProfileData() {
  try {
    // Adjust according to your auth method
    const userData = await getUserProfile()
    user.value = {
      status: userData.status || 'Offline',
      username: userData.username || 'Thinkmay',
      email: userData.email || "Undefined",
      plan: userData.plan || "Giờ",
      remain_time: userData.remain_time || 0,
      verify: userData.status || 'Offline',
      created: new Date(userData.created).toLocaleDateString() || new Date(),
    };
  } catch (error) {
    console.error('Error fetching profile data:', error);
  }
}

onMounted(() => {
  fetchProfileData();
});
</script>

<style scoped>
/* Add your scoped styles here */
.container {
  padding: 0 15px;
}

@media (max-width: 576px) {
  .container {
    padding: 0; /* Remove horizontal padding for small screens */
  }
}
</style>
