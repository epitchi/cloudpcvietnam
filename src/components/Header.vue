<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a class="logo"><router-link to="/" exact>
              <img src="../assets/images/logo2.png" alt="Logo" />
            </router-link>
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search End ***** -->
            <!-- <div class="search-input">
              <form id="search" action="#">
                <input type="text" placeholder="Tìm kiếm" id="searchText" name="searchKeyword" @keypress="handleKeypress" />
                <i class="fa fa-search"></i>
              </form>
            </div> -->
            <!-- ***** Search End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><router-link to="/" exact>Home</router-link></li>
              <li><router-link to="/browse" exact>Browse</router-link></li>
              <!-- <li><a href="details.html">Details</a></li>
              <li><a href="streams.html">Streams</a></li> -->
              <li>
                <router-link to="/profile" class="active">
                  Profile
                  <img src="../assets/images/profile-header.jpg" alt="Profile" />
                </router-link>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const handleKeypress = (event) => {
  // handle keypress event
}
</script>

<style scoped>
@import "../assets/css/fontawesome.css";
@import "../assets/css/owl.css";
@import "../assets/css/animate.css";


/* Additional styles if needed */
</style>
