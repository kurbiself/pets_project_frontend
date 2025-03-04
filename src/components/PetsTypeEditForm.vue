<template>
  <li>
    <form id="EditForm">
      <textarea form="EditForm" v-model.lazy.trim="new_name" />
    </form>
    <button class="editcheck" type="button" form="EditForm" title="Сохранить" @click="onSave">✔️</button>
    <button class="editcheck" type="button" form="EditForm" title="Отменить" @click="onСancel">❌</button> 
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return { new_name: this.name };
  },
  methods: {
    onSave() {
      this.$emit("edit_item", this.id, this.new_name);
    },
    onСancel() {
      this.$emit("cancel_item");
    },
  },
};
</script>
