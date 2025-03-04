<template>
    <div class="petslist">
        <tr>
            <td>
                {{ name }}
            </td>
            <td>
                {{ sex_name }}
            </td>
            <td>
                {{ breed_name }}
            </td>
            <td>
                {{ color }}
            </td>
            <td>
                {{ owner_name }}
            </td>
            <td>
                {{ note }}
            </td>
        </tr>
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
            sex_name: {
                type: String,
            },
            breed_name: {
                type: String,
            },
            owner_name: {
                type: String,
            },
            color: {
                type: String,
            },
        },
    }

</script>

<style>
@media (min-width: 1024px) {
  .petslist {
    min-height: 5vh;
    display: flex;
    align-items: center;
  }
}
</style>