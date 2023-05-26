<template>
 
   
  <router-view/>

</template>
<script>

import axios from 'axios'



export default {

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
</style>
