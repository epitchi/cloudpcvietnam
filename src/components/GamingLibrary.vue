<template>
    <div class="gaming-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4><em>Các gói</em> dịch vụ</h4>
        </div>
        <div class="item" v-for="game in games" :key="game.title">
          <ul>
            <li><img :src="game.image" alt="" class="templatemo-item" /></li>
            <li><h4>{{ game.price }}</h4><span>{{ game.usage_time }}</span></li>
            <li><h4>Cloud Save</h4><span>{{ game.cloudsave ? "Hỗ trợ": "Không hỗ trợ" }}</span></li>
            <li><h4>Dung lượng</h4><span>{{ game.storage }}</span></li>
            <li><h4>{{ game.status }}</h4><span></span></li>
            <li><div class="main-border-button border-no-active"><a href="/payment">Đăng ký ngay</a></div></li>
          </ul>
        </div>
      </div>
      <!-- <div class="col-lg-12">
        <div class="main-button">
          <a href="profile.html">View Your Library</a>
        </div>
      </div> -->
    </div>
  </template>
  
  <script setup>
  const games = [
    {
      name: '',
      image: 'https://i.pinimg.com/736x/59/b0/d7/59b0d7c95732020762f9467dd9cecf48.jpg',
      price: 'Genshin Impact & Honkai Star Rail',
      usage_time: '8.000VND/ giờ',
      cloudsave: false,
      active: '1 tháng',
      storage: "Chỉ chứa game",
    },
    {
      name: 'Game tuỳ chọn',
      image: '../assets/images/game-02.jpg',
      price: 'Sắp ra mắt',
      usage_time: '1 tháng',
      cloudsave: true,
      storage: "150G",
      active: '1 tháng',
    },
    {
      name: 'Game tuỳ chọn',
      image: 'assets/images/game-03.jpg',
      price: 'Sắp ra mắt',
      usage_time: '1 tháng',
      cloudsave: true,
      storage: "200G",
      active: '1 tháng',
    },
  ];
  </script>
  
  <style scoped>
  @import url('../assets/css/templatemo-cyborg-gaming.css');
  @import "../assets/vendor/bootstrap/css/bootstrap.min.css";
  </style>
  