<template>
  <div class="crud-form">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
          type="text"
          v-model="title"
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
          v-model="content"
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="content" class="form-label">Date</label>
      <input
          type="date"
          v-model="computedFormatDate"
          class="form-control"
          id="date"
      />
    </div>

    <div class="mb-3">
      <Button
          @btn-click="saveData"
          class="btn btn-primary btn-lg"
          text="Submit"
      />
    </div>
  </div>
</template>
<script>
import Button from "./Button";
import moment from "moment"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  components: {
    Button,
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    title: "",
    content: "",
    datas: [],
  }),
  computed: {
    computedFormatDate() {
      return moment(this.date).format("MMMM Do YYYY")
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    saveData() {
      //console.log( this.date );
      const newField = {
        //   id: Math.floor(Math.random() * 100000),
        title: this.title,
        content: this.content,
        date: this.date,
      };

      this.$emit("add-field", newField);

      this.title = "";
      this.content = "";
      this.date = "";
    },
  },
};
</script>
<style scoped>
</style>
