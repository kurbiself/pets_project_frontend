<template>
    <div>
        <h1>Информация о животном</h1>
        <span>
            {{ item }}
        </span>
        <pets-edit-form :name="this.item.name" :owner="this.item.owner" @edit-item="editItem" />
    </div>
</template>

<script>
import PetsEditForm from "./PetsEditForm.vue";
export default {
  components: { PetsEditForm },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return { item: {} };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get("p/" + this.id + "/");
        this.item = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(name, owner) {
      try {
        await this.$http.put("p/" + this.id + "/", {name: name, owner: owner});
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
