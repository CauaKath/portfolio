<script lang="ts">
export default {
  name: 'Button',
  props: {
    text: String,
  }
}
</script>

<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
