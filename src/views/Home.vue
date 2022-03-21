<template>
  <div>
    <Form @add-field="addField" />
    <News @delete-field="deleteField" :fields="fields"/>
  </div>
</template>

<script>
import Form from "../components/Form";
import News from "../components/News";
export default {
  name: "Home",
  data: () => ({
      fields: []
  }),
  components: {
    Form,
    News
  },
  methods: {
    async addField(field) {
      const res = await fetch("api/fields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(field),
      });

      const data = await res.json();
      this.fields = [...this.fields, data];
    },
    async deleteField(id) {
      if(confirm("Are you sure you want to delete this field?")) {
        const res = await fetch(`api/fields/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 
        ? (this.fields = this.fields.filter((field) => field.id !== id))
        : alert("Error on deleting this field")
      } 
    },
    async fetchFields() {
      const res = await fetch('api/fields');

      const data = await res.json();

      return data;
    }
  },
  async created() {
    this.fields = await this.fetchFields();
  }
};
</script>
