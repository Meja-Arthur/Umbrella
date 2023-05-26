

<template>
    <div>
      <form @submit="requestPasswordReset">
        <input type="email" v-model="email" required placeholder="Enter your email" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      requestPasswordReset() {
        axios.post('http://127.0.0.1:8900/auth/password/reset/', { email: this.email })
          .then(response => {
            // Password reset email sent successfully
            console.log(response.data);
          })
          .catch(error => {
            // Handle error
            console.error(error.response.data);
          });
      },
    },
  };
  </script>
  