<template>
    <div class="sign-up">
      <h1>Create Account</h1>
  
      <form class="registration-form" @submit.prevent="submitForm">
  
          <input type="text" v-model="name" placeholder="Name" required class="form-input">
          <input type="email" v-model="email" placeholder="email" required class="form-input">
          <input type="password" v-model="password" placeholder="Password" required class="form-input">
          <input type="password" v-model="rePassword" placeholder="Confirm Password" required class="form-input">
          <button  class="form-button" type="submit">Create</button>
  
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
      name: 'signup',
      data() {
          return {
              name: '',
              email: '',
              password: '',
              rePassword: '',
          }
      },
      methods: {
         submitForm(e) {
  
          if (this.password !== this.rePassword) {
          alert('Passwords do not match!');
          return;
          }
  
  
          const formData = {
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email,
              password: this.password,
              re_password: this.rePassword,
          }
  
          axios
             .post('http://127.0.0.1:8900/auth/users/', formData)
  
             .then(response => {
  
              this.$router.push('/')
              console.log(response)
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