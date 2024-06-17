<template>
  <div class="login">
    <h2>Login</h2>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script>
import { pb } from '../backend/createClient.ts';

export default {
  methods: {
    async loginWithGoogle() {
    let w = window.open();
    try {
        const { record: { id } } = await pb.collection('users').authWithOAuth2({
          provider: 'google',
          urlCallback: (url) => {
            w.location.href = url;
        }
        });
        const record = await pb.collection('users').getOne(id);
        console.log(record)
        // Redirect to profile page upon successful login
        this.$router.push('/');
      } catch (error) {
        console.error('Error logging in with Google:', error);
        // Handle error (e.g., show error message)
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #357ae8;
}
</style>
