<template>
    <nav>
      <div class="logo">AltSchool </div>
      <div class="nav-links">
        <router-link class="home" to="/">Home</router-link>
        <!-- <router-link to="/counter">Counter</router-link> -->
      </div>
      <!-- <div>Icon</div> -->
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
<style>
  nav{
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    max-width: 100%;
  }
  .logo{
    font-size: 2rem;
    color: black;
  }
  .nav-links{
    display: flex;
    align-items: center;
  }
  .home{
    list-style: none;
    text-decoration: none;
    color: black;
  }
</style>