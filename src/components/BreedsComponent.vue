<template>
    <div class="breedslist">  
        <li>
            {{ name }} ({{ type_name }})
        </li>
    </div>
</template>


<script>
    export default{
        props: {
            name: {
                type: String,
                required: true,
            },
            note: {
                type: String,
            },
            type_name:
            {
                type: String,
            }  
        },
    }

</script>

<style>
@media (min-width: 1024px) {
  .breedslist {
    min-height: 5vh;
    display: flex;
    align-items: center;
  }
}
</style>