<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-3">
        <div class="mb-3">
          <div v-show="addForm">
            <Form @add-field="addField" />
          </div>
          <div v-show="updateForm">
            <UpdateForm @updfields="updFields" :field="field" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-9">
        <DataTable
            @adding-field="addingField" :isDisabled="isDisabled"
            @delete-field="deleteField"
            :fields="fields"
            @edit-field="editField"
        />
        <div class="d-flex flex-row">
          <p>Total: {{ total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
import UpdateForm from "../components/UpdateForm";
import DataTable from "../components/DataTable";
import { mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  head: {
    title: {
      inner: "Home"
    }
  },
  data: () => ({
    updateForm: false,
    addForm: true,
    field: {},
    isDisabled: true,
    currentPage: 1,
    perPage: 5
  }),
  components: {
    Form,
    DataTable,
    UpdateForm
  },
  computed: {
    ...mapState({
      fields: state => state.DataTable.fields
    }),
    total() {
      return this.$store.getters['DataTable/fieldLength']
    }
  },
  methods: {
    addingField() {
      this.addForm = true;
      this.updateForm = false;
      this.isDisabled = true;
    },
    async addField(field) {
      await fetch("api/fields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(field),
      });

      this.fields = await this.fetchFields();
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
      this.fields = await this.fetchFields();
    },
    fetchFields() {
      this.$store.dispatch("DataTable/getFields");
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

      await fetch(`api/fields/${updateField.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.field),
      });

      this.fields = await this.fetchFields();
    }
  },
  async created() {
    this.fetchFields();
  }
};
</script>
