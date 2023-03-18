<template>
  <div class="app">
    <Navbar />
    <!-- <CounterApp /> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
// import CounterApp from './components/CounterApp.vue'
// import ToggleSwitch from "./components/ToggleSwitch.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    // CounterApp,
  }
};
</script>