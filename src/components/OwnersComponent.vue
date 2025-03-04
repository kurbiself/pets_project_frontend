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
@media (min-width: 1024px) {
  .ownerslist {
    min-height: 5vh;
    display: flex;
    align-items: center;
  }
}
.owneritem {
  margin: 7px 0;
  list-style-type: "🐾";
}
</style>
