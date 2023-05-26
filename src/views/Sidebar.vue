<template>
    <div class="sidebar">
      <ul>
        <li class="sidebar-item"><a href="#">New</a></li>
        <li class="sidebar-item"><a href="#">Taken</a></li>
        <li class="sidebar-item"><a href="#">Completed</a></li>
        <li class="sidebar-item"><a href="#">Profile</a></li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </template>

<script>
export default {
  name: 'Sidebar'


}
</script>

<style>
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    height: 100%; /* Set the sidebar height to 100% of its container */
  }

  /* Optionally, you can add additional styles to make the sidebar scrollable */
  .sidebar {
    overflow-y: auto; /* Enable vertical scrolling */
  }

  .sidebar ul {
    list-style: none;
    padding: 10px;
    margin: 10px;
  }
  .sidebar-item {
    border-bottom: 1px solid #ccc;
  }

  .sidebar-item:last-child {
    border-bottom: 1px solid #ccc; /* Remove the border for the last item */
  }

  .sidebar-item a {
    display: block;
    padding: 10px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s ease; /* Add a smooth transition effect */
  }

  /* Apply styles when hovering over the links */
  .sidebar-item a:hover {
    background-color: #e6e6e6;
    color: #000;
  }

  /*.sidebar li {
    padding: 10px;
    margin: 10px;
  }

  .sidebar li a {
    color: #333;
    text-decoration: none;
  } */
</style>





  
