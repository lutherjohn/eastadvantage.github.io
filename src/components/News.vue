<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <template v-for="field in fields">
        <tbody :key="field.id">
          <tr>
            <th scope="row">{{ field.id }}</th>
            <td>{{ field.title }}</td>
            <td>{{ field.content }}</td>
            <td>{{ field.date }}</td>
            <td>
                <i @click="onDelete(field.id)" class="fas fa-times"/>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    fields: Array,
  },
  methods: {
      onDelete(id) {
          console.log(id);
          this.$emit('delete-field', id);
      }
  }
};
</script>
<style scoped>
.fas {
    color: red;
    cursor: pointer;
}
</style>
