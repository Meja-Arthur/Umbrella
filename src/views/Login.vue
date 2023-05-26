
<template>
    <div class="log-in">
       <h1>Login</h1>
   
       <form class="registration-form" @submit.prevent="submitForm">
   
           <input type="email" v-model="email" placeholder="email" required class="form-input">
           <input type="password" v-model="password" placeholder="Password" required class="form-input">
           <button class="form-button" type="submit">Login</button><br/>
           <router-link to="/signup">Don't have an Account?</router-link>
           <router-link to="/password/reset">Forgot Password?</router-link>
       </form>
   
   
       
   
   
   
       
    </div>
   </template>
   
   <script>
   import axios from 'axios'
   //import { VuejsModal } from 'vue-js-modal'
   
   export default {
   
     
       name:'login', 
       data() {
           return {
            
             'email': '',
             'password': ''
           }
       },
   
       methods: {
   
       
           submitForm(e) {
             
   
             
   
               const formData = {
                   email: this.email,
                   password: this.password
               }
               axios
                 .post('http://127.0.0.1:8900/auth/token/login/', formData)
   
                 .then(response =>{
                   console.log(response)
   
                   const token = response.data.auth_token
   
                   this.$store.commit('setToken', token)
   
                   axios.defaults.headers.common['Authorization'] = "Token " + token
   
                   localStorage.setItem("token", token)
   
                   this.$router.push('/home')
                 })
                 .catch(error => {
                   console.log(error)
                 })
   
   
   
           }
       }
   
   }
   </script>
   
   <style>
   h1 {
       text-align: center;
   }
   .registration-form {
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   
   .form-input {
     width: 300px;
     padding: 10px;
     margin-bottom: 10px;
   }
   
   .form-button {
     padding: 10px 20px;
     background-color: #007bff;
     color: #fff;
     border-radius: 4px;
     cursor: pointer;
   }
   
   .form-button:hover {
     background-color: #0056b3;
   }
   
   
   </style>