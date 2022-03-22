<template>
  <div id="app">
    <Header :text="text"/>
    <Home />
  </div>
</template>

<script>
import Header from './components/Header';
import Home from './views/Home';

export default {
  name: 'App',
  data: () => ({
    text: "East Advantage Assesment"
  }),
  components: {
    Header,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
