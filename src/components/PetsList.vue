<template>
  <div>
    <h1>Список домашних животных</h1>
    <table>
        <tr>
            <td>
                Имя
            </td>
            <td>
                Пол
            </td>
            <td>
                Порода
            </td>
            <td>
                Цвет
            </td>
            <td>
                Владелец
            </td>
            <td>
                Заметки
            </td>
          </tr>
            <pets-component
                v-for="item in items"
                    :id="item.id"
                    :name="item.name"
                    :sex_name="item.sex_name"
                    :breed_name="item.breed_name"
                    :owner_name="item.owner_name"
                    :color="item.color"
                    :birth="item.birth"
                    :note="item.note"
        /> 
    </table>
  </div>
</template>

<script>
import PetsComponent from "./PetsComponent.vue";
export default {
  components: {
    PetsComponent,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get("p/");
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

<style>
table {
  border-radius: 3px;
  background-color: #ffffff;
}
td {
    min-width: 200px;
    padding: 10px 20px;
    background-color: #2c6b7a;
}
tr {
    background-color: #fff;
}
th {
    background-color: #ffffff;
}
</style>
