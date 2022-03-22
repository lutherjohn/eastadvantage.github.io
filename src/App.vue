<template>
  <div id="app">
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border">
        <Header :text="text" />
      </div>
      <div class="p-2 bg-light border">
        <Home />
      </div>

      <Footer />
    </div>
    
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";

export default {
  name: "App",
  data: () => ({
    text: "East Advantage Assesment",
  }),
  components: {
    Header,
    Home,
    Footer
  },
};
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
