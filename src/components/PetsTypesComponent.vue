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

<style>
@media (min-width: 1024px) {
  .petstypeslist {
    min-height: 5vh;
    align-items: center;
  }
}
.petstypesitem {
  display: flex;
  width: 200px;
  justify-content: flex-end;

}
.update {
  height: 30px;
  width: 30px;
  background-image: url("@/assets/pencil.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #181818;
  border: none;
  opacity: 0.5;
  transition: 0.3s;
  margin-left: 10px;
}
.update:hover {
  opacity: 1;
}

.editcheck {
  border-radius: 10px;
  border: none;
  transition: 0.2s linear;
  background: rgb(139, 215, 234);
  margin-left: 10px;
}
.editcheck:hover {
  transform: rotateZ(10deg);
}
textarea {
  color: rgb(255, 255, 255);
  border-color: #2c6b7a;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  background-color: #181818;
}
.delete {
  height: 30px;
  width: 30px;
  background-image: url("@/assets/trash.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #181818;
  border: none;
  opacity: 0.5;
  transition: 0.3s;
  margin-left: 10px;
}
.delete:hover {
  opacity: 1;
}
</style>
