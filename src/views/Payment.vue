<template>
    <div id="payment">
    <router-view>
      <Preloader />
      <Header />
      <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <!-- ***** Payment Form Start ***** -->
              <div class="row">
                <div class="col-lg-12">
                  <div class="main-profile">
                    <div class="row">
                      <div class="col-lg-4">
                        <img src="../assets/images/profile.jpg" alt="" style="border-radius: 23px" />
                      </div>
                      <div class="col-lg-4 align-self-center">
                        <div class="main-info header-text">
                          <span>Payment</span>
                          <h4>Complete Your Purchase</h4>
                          <p>Select your plan and provide your details below to proceed with the payment.</p>
                          <div class="main-border-button">
                            <a href="#">Learn More</a>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              <!-- ***** Payment Form End ***** -->
  
              <!-- ***** Pricing Plans Start ***** -->
            
              <!-- ***** Pricing Plans End ***** -->
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer/>

    </router-view>
    </div>
  </template>
  

<script setup>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Preloader from '../components/Preloader.vue';

</script>
  
  <script>
  export default {
    name: 'Payment',
    components: {
      Header,
      Preloader
    },
    data() {
      return {
        email: '',
        quantity: 1,
        pricingPlan: '',
        games: [
          { id: 1, title: 'Honkai Star Rail', views: 250, image: '../assets/images/clip-01.jpg', url: 'https://www.example.com/game-1' },
          { id: 2, title: 'Genshin Impact', views: 183, image: '../assets/images/clip-02.jpg', url: 'https://www.example.com/game-2' }
        ]
      };
    },
    methods: {
      async submitPayment() {
        try {
          const paymentData = {
            email: this.email,
            quantity: this.quantity,
            pricingPlan: this.pricingPlan
          };
          await pb.collection('payments').create(paymentData);
          alert('Payment submitted successfully!');
          this.$router.push('/profile'); // Redirect to profile page after payment
        } catch (error) {
          console.error('Error submitting payment:', error);
          alert('Error submitting payment. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .payment-form {
    background-color: #2a2a2a;
    padding: 20px;
    border-radius: 23px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .heading-section {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-label {
    font-weight: bold;
    color: #fff;
  }
  
  .form-control {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 23px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .form-control:focus {
    background-color: #444;
    color: #fff;
    border: none;
    box-shadow: none;
  }
  
  .form-check-label {
    color: #fff;
  }
  
  .main-border-button {
    text-align: center;
  }
  
  .main-border-button button {
    background-color: #ff8c00;
    border: none;
    padding: 10px 20px;
    border-radius: 23px;
    color: #fff;
    cursor: pointer;
  }
  
  .main-border-button button:hover {
    background-color: #ff7000;
  }
  </style>
  