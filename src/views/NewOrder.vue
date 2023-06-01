<template>
  <div>
    <h1>New Orders</h1>

    <div class="card-container">
      <div class="card-body">
        <div v-for="newOrder in newOrders" :key="newOrder.id" class="card">
          <h2>{{ newOrder.title }}</h2>
          <p>{{ newOrder.description }}</p>
        </div>
      </div>
    </div>

  </div>    
</template>

>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      newOrders: [],
    };
  },
  created() {
    this.fetchNewOrders();
  },
  methods: {
    fetchNewOrders() {
      axios
        .get('http://127.0.0.1:8900/customUser/new-orders/')
        .then((response) => {
          this.newOrders = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.card h2 {
  margin-top: 0;
}

.card p {
  margin-bottom: 10px;
}

.card-body {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #ffffff;
}



</style>

  