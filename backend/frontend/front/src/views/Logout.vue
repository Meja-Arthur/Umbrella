<template>
    <div>
      <button @click="handleLogout">Logout</button>
    </div>  
  </template>
  
  <script>
  
  
  import { mapActions } from 'vuex';
  
  export default {
      
    methods: {
      ...mapActions(['logout']),
      handleLogout() {
        this.logout();
        // Additional actions after logout, such as redirecting to a login page
        this.$router.push('/')
      }
    }
  }
  
  </script>
  
  <style>
  
  </style>