<template>
    <main class='not-found'>
      <h1 class='heading-main'>Counter App</h1>
      <p class='home__msg'>Counter App with VueJS that performs Increment, decrement, Reset and set Value functions. 
      </p>
       
        <div> 
          <button type='button' class='btn'><router-link to="/counter">Counter</router-link> </button>
          <button type='button' class='btn'><a href='https://www.github.com/accoladesio'>GitHub</a> </button>
        </div>

        <span class='span'><p class='home__msg'> Created with ❤️ and 💡 by Ononobi 'Accolades' Praise</p></span>
    </main>
  </template>
  
  <script>
  export default {
    name: 'HomeApp'
  };
  </script>
  
<style>
  .info{
    background-color: antiquewhite;
    padding: 4rem 3rem;
  }
  .info-col{
    display: flex;
  }
</style>