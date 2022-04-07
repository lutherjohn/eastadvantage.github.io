<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">
        <router-link to="/">Home</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/datalist">TableList</router-link>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style scoped>

</style>