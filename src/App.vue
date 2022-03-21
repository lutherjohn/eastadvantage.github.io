<template>
  <div id="app">
    <Header />
    <Form @add-field="addField" />
    <News @delete-field="deleteField" :fields="fields"/>

  </div>
</template>

<script>
import Header from './components/Header';
import Form from './components/Form';
import News from './components/News';

export default {
  name: 'App',
  data: () => ({
    fields: []
  }),
  components: {
    Header,
    Form,
    News
  },
  methods: {
    addField(field) {
      this.fields = [...this.fields, field]
    },
    deleteField(id) {
      if(confirm("Are you sure you want to delete this field?")) {
        this.fields = this.fields.filter((field) => field.id !== id)
      } 
    }
  },
  created() {
    this.fields = [
      {
          "id": "1",
          "title": "Sample Title 1",
          "content": "Sample Content",
          "date": "2022-03-21"
      },
      {
          "id": "2",
          "title": "Sample Title 2",
          "content": "Sample Content",
          "date": "2022-03-24"
      },
      {
          "id": "3",
          "title": "Sample Title 3",
          "content": "Sample Long Content",
          "date": "2022-03-24"
      }
    ];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
