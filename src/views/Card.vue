<template>
  <div class="d-grid gap-3">
    <Navigation/>
    <div class="p-2 bg-light border">
      <Header :text="text" />
    </div>
    <div class="p-2 bg-light border">
      <Home />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation"
import Header from "@/components/Header";
import Home from "@/views/Home";
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  data: () => ({
    text: "East Advantage Assesment",
  }),
  components: {
    Navigation,
    Header,
    Home,
    Footer
  },
}
</script>

<style scoped>

</style>