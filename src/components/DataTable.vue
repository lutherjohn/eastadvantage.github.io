<template>
<div class="container">
    <div class="d-flex justify-content-between mb-4">
      <input placeholder="Search" v-model="searchQuery"/>
      <div class="d-flex">
        <button type="button" class="btn btn-secondary" @click="onAdd" :disabled="isDisabled">
          Add New
        </button>
      </div>
    </div>
    <div class="table-responsive-sm">
      <table v-if="fields.length" class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Date</th>
        </tr>
        </thead>
        <template v-for="field in resultQuery">
          <tbody :key="field.id">
          <tr>
            <th scope="row">{{ field.id }}</th>
            <td>{{ field.title }}</td>
            <td>{{ field.content }}</td>
            <td>{{ formatDate(field.date) }}</td>
            <td>
              <button
                  type="button"
                  class="btn btn-info"
                  @click="onUpdate(field.id)"
              >
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </button>
              &nbsp;
              <button
                  type="button"
                  class="btn btn-danger"
                  @click="onDelete(field.id)"
              >
                <font-awesome-icon icon="fa-solid fa-trash-can" />
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
import moment from "moment";

export default {
  name: "DataTable",
  data: () => ({
    searchQuery: null
  }),
  props: {
    fields: Array,
    isDisabled: Boolean
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
        return this.fields.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v));
        })
      }else{
        return this.fields;
      }
    }
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
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY")
    }
  }
};
</script>
<style scoped>
</style>
