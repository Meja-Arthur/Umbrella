<template>
  <div class="app-container">

    <header class="app-header">
      <!-- Content of the header -->
    </header>


    <div class="app-content">
      <sidebar></sidebar>
      <main>
        <!-- Content of the main section -->
        
      <!-- Content of the main section -->
      <button @click="handleLogout">Logout</button>
    
      </main>
    </div>


  </div>



</template>

<script>
import { mapActions } from 'vuex';
import Sidebar from './Sidebar.vue';

export default {

  components: {
      Sidebar
    },
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
  .app-container {
    display: flex;
    flex-direction: column; /* Arrange the elements in a column layout */
    height: 100vh;
  }

  .app-header {
    background-color: red;
    padding: 20px;
    padding-left: 0%;
    
    
    margin: 0px;
    margin-bottom: 5px;
  }

  .app-content {
    display: flex;
    flex: 1; /* Allow the content to grow and fill the remaining space */
  }
  
  /* Adjust the space between the sidebar and main content */
  .app-content sidebar {
    flex: 0 0 auto; /* Prevent the sidebar from growing or shrinking */
  }
  
  .app-content main {
    flex: 1; /* Allow the main content to grow and fill the remaining space */
  }
</style>






