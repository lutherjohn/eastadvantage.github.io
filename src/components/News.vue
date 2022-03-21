<template>
  <div class="container">
    <div>
      <table class="table table-hover">
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
                <button type="button" class="btn btn-danger" @click="onDelete(field.id)">Delete</button>
                &nbsp;
                <button type="button" class="btn btn-info" @click="onUpdate(field.id)">Edit</button>
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
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
      this.$emit("delete-field", id);
    },
  },
};
</script>
<style scoped>
</style>
