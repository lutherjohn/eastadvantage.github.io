<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="mb-3">
          <div v-show="addForm">
            <Form @add-field="addField" />
          </div>
          <div v-show="updateForm">
            <UpdateForm @updfields="updFields" :field="field" />
          </div>
        </div>
      </div>
      <div class="col-9">
        <DataTable
          @adding-field="addingField" :isDisabled="isDisabled"
          @delete-field="deleteField"
          :fields="fields"
          @edit-field="editField"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
import UpdateForm from "../components/UpdateForm";
import DataTable from "../components/DataTable";
export default {
  name: "Home",
  data: () => ({
    fields: [],
    updateForm: false,
    addForm: true,
    field: {},
    isDisabled: true
  }),
  components: {
    Form,
    DataTable,
    UpdateForm,
  },
  methods: {
    addingField() {
      this.addForm = true;
      this.updateForm = false;
      this.isDisabled = true;
    },
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
      if (confirm("Are you sure you want to delete this field?")) {
        const res = await fetch(`api/fields/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.fields = this.fields.filter((field) => field.id !== id))
          : alert("Error on deleting this field");
      }
    },
    async fetchFields() {
      const res = await fetch("api/fields");

      const data = await res.json();

      return data;
    },
    async fetchFieldsValue(id) {
      const res = await fetch(`api/fields/${id}`);

      const data = await res.json();

      return data;
    },
    async editField(id) {
      this.updateForm = true;
      this.isDisabled = false;
      this.addForm = false;
      this.field = await this.fetchFieldsValue(id);
    },
    async updFields(updateField) {
      this.updateForm = false;
      this.isDisabled = true;
      this.addForm = true;

      const res = await fetch(`api/fields/${updateField.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.field),
      });

      const data = await res.json();

      this.fields = await this.fetchFields();
    },
  },
  async created() {
    this.fields = await this.fetchFields();
  },
};
</script>
