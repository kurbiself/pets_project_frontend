<template>
    <h1>
        Список типов домашних животных
    </h1>
    <ul>
        <pets-types-component v-for="item in items" :name="item.name" :note="item.note"  />
    </ul>
</template>

<script>
    import PetsTypesComponent from './PetsTypesComponent.vue';
    export default{
        components: {
            PetsTypesComponent,
        },
        data(){
            return {
                items: []
            }
        },
        methods: {
            async getData(){
                try{
                    const response = await this.$http.get("pt/")
                    this.items = response.data
                }
                catch(error){
                    console.log(error)
                }
            }
        },
        created(){
            this.getData()
        }
    }
</script>