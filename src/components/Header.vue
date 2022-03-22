<template>
  <header class="mb-3">
    <h1> {{ text }} </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>