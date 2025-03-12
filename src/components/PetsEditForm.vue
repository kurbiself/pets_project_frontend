<template>
  <div>
    {{ name }} {{newName }} {{ tmp }}
    <form @submit.prevent="saveData">
      <div>
        <div>
          <label>Кличка</label>
          <input
            type="text"
            placeholder="Введите кличку"
            :key="tmp"
            v-model.lazy.trim="newName"
          />
        </div>
        <div>
          <label>Хозяин</label>
          <select v-model="newOwner" :key="tmp">
            <variants name="ow" :selected="this.owner" />
          </select>
        </div>
        <button type="submit">Подтвердить</button>
        <button @click="goBack">Вернуться к списку</button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import Variants from "./Variants.vue";
export default {
  components: { Variants },
  props: {
    name: { type: String },
    owner: { type: Number },
  },
  data() {
    return { 
        newName: this.name, 
        newOwner: this.owner,
        tmp: 0,  
    };
  },
  watch:
  {
    newName(newValue){
        if (!!newValue)
        {
            this.tmp++;
        }
    }, 
  },
  methods: {
    saveData() {
      this.$emit("edit-item", this.newName, this.newOwner);
    },
    goBack() {
      this.$router.push("/petslist");
    },
  },
};
</script>
