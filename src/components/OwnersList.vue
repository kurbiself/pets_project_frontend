<template>
    <div>
      <h1>Список владельцев</h1>
      <ul>
        <owners-component
          v-for="item in items"
          :name="item.name"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import OwnersComponent from './OwnersComponent.vue';
  export default {
    components: {
        OwnersComponent,
    },
    data() {
      return {
        items: [],
      };
    },
    methods: {
      async getData() {
        try {
          const response = await this.$http.get("ow/");
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
  