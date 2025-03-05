<template>
  <div class="petstypeslist">
    <li class="petstypesitem" v-if="!edit_mode">
      <RouterLink :to="'/breedslist/' + id"> {{ name }}</RouterLink> {{ note }}
      <button
        class="update"
        type="button"
        title="Изменить"
        @click="onEdit"
      ></button>
      <button
        class="delete"
        type="button"
        title="Удалить"
        :id="this.id"
        @click="delete_item"
      ></button>
    </li>
    <pets-type-edit-form
      v-else
      :id="this.id"
      :name="this.name"
      @edit_item="edit_item"
      @cancel_item="cancel_item"
    />
  </div>
</template>

<script>
import PetsTypeEditForm from "./PetsTypeEditForm.vue";
export default {
  components: {
    PetsTypeEditForm,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      edit_mode: false,
    };
  },
  methods: {
    onEdit() {
      this.edit_mode = true;
    },
    edit_item(id, name) {
      this.$emit("edit_item", id, name);
      this.edit_mode = false;
    },
    cancel_item() {
      this.edit_mode = false;
    },
    delete_item(id) {
      this.$emit("delete_item", this.id)
    }
  },
};
</script>