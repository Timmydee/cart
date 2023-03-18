<template>
    <main >
      <div class="home_header">
        <h1>Alt__ <br/> School</h1>
      </div>
      <div class='home'>
        <p class='home__msg'>Proceed</p>
        <div class="but"> 
          <button type='button' class='btn btn1'><router-link to="/counter">Cart Counter</router-link> </button>
          <button type='button' class='btn btn2'><a href='https://github.com/Timmydee/cart'>GitHub</a> </button>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'HomeApp'
  };
  </script>
  
<style>
  .home_header{
    width: 100%;
    height: 300px;
    background-color: black;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
  }
  .home{
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home p{
    margin-top: 2rem;
    font-size: 2rem;
  }

  a{
    list-style: none;
    text-decoration: none;
    color: aliceblue;
  }
  .btn{
    width: 150px;
    height: 50px;
    border-radius: 50px;
    margin-right: 1rem;
    border: none;
    font-size: 1rem;
  }
  .btn1{
    background-color: green;
  }
  .btn2{
    background-color: blue;
  }

  @media screen and (max-width:600px) {
    .home_header{
      font-size: 1rem;
      height: 200px;
    }
    .but{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .btn{
      margin: 0.5rem 0 0 0;
    }
  }
</style>