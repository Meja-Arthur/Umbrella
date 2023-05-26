<template>
    <div>
      <form @submit="confirmPasswordReset">
        <input type="password" v-model="newPassword" required placeholder="Enter your new password" />
        <input type="password" v-model="confirmPassword" required placeholder="Confirm your new password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newPassword: '',
        confirmPassword: '',
      };
    },
    methods: {
      confirmPasswordReset() {
        const token = 'the_password_reset_token'; // Get the token from the URL or route params
  
        if (this.newPassword !== this.confirmPassword) {
          // Passwords don't match
          console.error('Passwords do not match');
          return;
        }
  
        axios.post('http://127.0.0.1:8900/auth/password/reset/confirm/', { token, new_password: this.newPassword })
          .then(response => {
            // Password reset successful
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
  