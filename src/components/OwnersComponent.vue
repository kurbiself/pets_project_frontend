<template>
  <div class="ownerslist">
    <li class="owneritem">
      {{ name }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
