<template>
    <div>
      <h1>Список пород</h1>
      <ul>
        <breeds-component
          v-for="item in items"
          :name="item.name"
          :note="item.note"
          :type_name="item.type_name"
        />
      </ul>
      <router-link to="/petstypeslist">Назад</router-link>
    </div>
  </template>
  
  <script>
  import BreedsComponent from './BreedsComponent.vue';
  export default {
    props: {
        type_id:{
          type: Number,
          required: true,
        }
    },
    components: {
        BreedsComponent,
    },
    data() {
      return {
        items: [],
      };
    },
    methods: {
      async getData() {
        try {
          const response = await this.$http.get("br/", {params:{"type":this.type_id}});
          this.items = response.data;
        } catch (error) {
          console.log(error);
        }
      },
    },
    created() {
      this.getData();
    },
  };
  </script>
  