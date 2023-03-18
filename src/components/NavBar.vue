<template>
    <nav>
      <div class="logo">AltSchool</div>
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
    max-height: 80px;
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

  @media screen and (max-width: 600px) {
    nav{
      padding: 0.7rem 0;
      /* font-size: 0.6rem; */
    }
    .logo{
      font-size: 1.5rem;
    }
  }
</style>