<template>
  <header class="mb-3">
    <h1> {{ text }} </h1>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>