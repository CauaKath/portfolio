<template>
  <div class="container">
    <h4>{{ title }}</h4>

    <a href="/">
      <button>A</button>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  props: {
    title: String,
  }
}
</script>

<style lang="scss">
.container {
  height: 8vh;
  background-color: #c4c4c4;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-family: Roboto 400;
    font-size: large;
  }
}
</style>