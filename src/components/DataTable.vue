<template>
<div class="container">
    <div class="d-flex flex-row-reverse bd-highlight">
      <button type="button" class="btn btn-secondary" @click="onAdd" :disabled="isDisabled">
        Add New
      </button>
    </div>
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
              <button
                  type="button"
                  class="btn btn-info"
                  @click="onUpdate(field.id)"
              >
                Edit
              </button>
              &nbsp;
              <button
                  type="button"
                  class="btn btn-danger"
                  @click="onDelete(field.id)"
              >
                Delete
              </button>
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
  name: "DataTable",
  props: {
    fields: Array,
    isDisabled: Boolean
  },
  methods: {
    onAdd() {
      this.$emit("adding-field");
    },
    onDelete(id) {
      this.$emit("delete-field", id);
    },
    onUpdate(id) {
      this.$emit("edit-field", id);
    },
  },
};
</script>
<style scoped>
</style>
