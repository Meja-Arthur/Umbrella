<template>

  <div id="app">

      <div class="Home">

          <Sidebar/>

        <div class="content">
            <router-view/>
        </div>

      </div>

  

  </div>
   
 
</template>
<script>

import axios from 'axios'
import Sidebar from './components/Sidebar.vue'




export default {

  components: { Sidebar,},
 
  name: 'App',

  beforeCreated() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if ( token ) { // this line of code state that if there's a token it takes it and i don't 
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ''
    }
  }

}
</script>

<style>

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.Home {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}




</style>