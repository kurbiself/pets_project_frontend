<template>
  <div>
    <h1>Список типов домашних животных</h1>
    <ul>
      <pets-types-component
        v-for="item in items"
        :id="item.id"
        :name="item.name"
        :note="item.note"
        @edit_item="edit_item"
        @delete_item="delete_item"
      />
    </ul>
  </div>
</template>

<script>
import PetsTypesComponent from "./PetsTypesComponent.vue";
export default {
  components: {
    PetsTypesComponent,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get("pt/", {
          headers: {
            authorization:
              `Bearer ${localStorage.access_token}` ,
          },
        });
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async editData(id, name) {
      try {
        await this.$http.put("pt/" + id + "/", { name: name },
        {
          headers: {
            authorization:
              `Bearer ${localStorage.access_token}` ,
          }}
          ,);
      } catch (error) {
        console.log(error);
      }
    },
    async onDelete(id) {
      try {
        await this.$http.delete("pt/" + id + "/");
      } catch (error) {
        console.log(error);
      }
    },
    delete_item(id) {
      this.onDelete(id);
      this.getData();
      this.refresh();
    },
    edit_item(id, new_name) {
      this.editData(id, new_name);
      this.getData();
      this.refresh();
    },
    refresh() {
      setTimeout(() => {
        this.getData();
      }, 500);
    },
  },
  created() {
    this.getData();
  },
};
</script>
