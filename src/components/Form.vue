<template>
  <div class="container">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Title</label
      >
      <input
        type="text"
        v-model="title"
        class="form-control"
        id="title"
        placeholder="Title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label"
        >Content</label
      >
      <textarea
        class="form-control"
        id="content"
        rows="3"
        v-model="content"
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="content" class="form-label"
        >Date</label
      >
      <input
        type="date"
        v-model="date"
        class="form-control"
        id="date"
        placeholder="Date"
      />
    </div>

    <div class="mb-3">
        <button class="btn btn-primary btn-lg" @click="saveData">Submit</button>
    </div>

  </div>
</template>
<script>

export default {
  name: "Form",
  data: () => ({
      title: "",
      content: "",
      date: "",
      datas: []
  }),
  methods: {
     async saveData() {
          //console.log( this.date );
          const newField = {
              id: Math.floor(Math.random() * 100000),
              title: this.title,
              content: this.content,
              date: this.date
          }

          this.$emit('add-field', newField)

          this.title = ""
          this.content = ""
          this.date = ""

        //   const res = await fetch('api/crud',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(data)
        //   })

        //   const save = await res.json();
        //   this.datas = [...this.datas, save];
          
      },
    //   async fetchNews() {
    //       const res = await fetch('api/crud')

    //       const data = await res.json();

    //       return data;
    //   }
  },
  created() {
      //this.news = await this.fetchNews();
  }
};
</script>
<style scoped>
</style>