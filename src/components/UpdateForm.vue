<template>
  <div class="container">
    <div class="mb-6">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input
            type="text"
            v-model="field.title"
            class="form-control"
            id="title"
            placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea
            class="form-control"
            id="content"
            rows="3"
            v-model="field.content"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Date</label>
        <input
            type="date"
            v-model="field.date"
            class="form-control"
            id="date"
            placeholder="Date"
        />
      </div>

      <div class="mb-3">
        <Button @btn-click="updateFormFields" class="btn btn-success btn-lg" text="Update" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button";

export default {
  name: "UpdateForm",
  components: {
    Button,
  },
  props: {
    field: Object
  },
  methods: {
    async updateFormFields() {
      const updateField = {
        //   id: Math.floor(Math.random() * 100000),
        id: this.field.id,
        title: this.field.title,
        content: this.field.content,
        date: this.field.date,
      };

      console.log({UpdateFormData: updateField});

      this.$emit("updfields", updateField);
    },
  },
};
</script>
<style scoped></style>
