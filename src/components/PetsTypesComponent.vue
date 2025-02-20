<template>
    <li>
        {{ name }}, {{ note }}
    </li>
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
        },
    }

</script>