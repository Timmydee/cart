<template>
    <div class="cart-col">
      <div class="cart-image">     
        <img src="../assets/AltCart.jpg" />
      </div>
      <div class="cart-details">
        <h3>School of Engineering Hoodie</h3>
        <p>Black Cotton</p>
        <div class="btn-wrapper">
          <button class="btn decrement" @click="decrement">
            -
          </button>
          <span>{{ count }}</span>
          <button class="btn increment" @click="increment">
            +
          </button>
        </div>

        <div class="cart-input">
          <input class="input-field" type="number" v-model="value" />
          <input class="submit" type="submit" @click="setValue(value)" value="Set Quantity" />     
        </div> 

        <button class="proceed">Proceed</button>
        
      </div>
    </div>
    <InfoApp />
  </template>
  
  <script>
  import useCounter from '@/composable/counter'
  import InfoApp from './InfoApp.vue'
  
  export default {
    setup() {
        const { count, increment, decrement, reset, setValue } = useCounter();
        return {
            count,
            increment,
            decrement,
            reset,
            setValue,
            value: 0,
        };
    },
    components: { InfoApp }
}
</script>

<style>
  .cart-col{
    width: 100%;
    display: flex;
    padding: 3rem 3rem;
  }
  .cart-details{
    display: flex;
    margin-left: 4rem;
    flex-direction: column;
    justify-content: center;
  }
  h3{
    font-size: 2rem;
    color: #505050;
    margin-bottom: 1rem;
  }
  p{
    font-size: 1rem;
    color: #505050;
    margin-bottom: 1rem;
  }
  button{
    padding: 0.3rem 0.7rem;
    font-size: 0.9rem
  }
  span{
    border: 1px solid gray;
    padding: 0.3rem 0.7rem;
  }
  .cart-input{
    margin-top: 1rem;
  }
  .input-field{
    max-width: 50px;
    /* padding: 0.4rem 1rem; */
  }
  .proceed{
    max-width: 120px;
    margin-top: 1rem;
    background-color: rgb(211, 63, 63);
    border: none;
    padding: 0.8rem 1.5rem;
    color: #ffffff;
  }

  @media screen and (max-width: 1000px) {
    .cart-col{
      flex-direction: column;
      width: 100%;
    }
    .cart-image{
      width: 90%;
      margin: 0rem auto;

    }
    img{
      max-width: 90%;
    }
    .cart-details{
      width: 90%;
      margin: 0rem auto;
    }
    .cart-details h3{
      font-size: 1rem;
      padding-top: 10px;
    }
    button{
      padding: 0;
      font-size: 10px;
    }
    span{
      border: 1px solid gray;
      padding: 0.3rem 0.7rem;
      text-align: center;
    }
    .cart-input{
      margin-top: 1rem;
      width: 50px;
    }
    .input-field{
      max-width: 100px;
    }
    .proceed{
      max-width: 120px;
      margin-top: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
</style>