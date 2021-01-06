<template>
  <div>Child2</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Child2",
    };
  },
  created() {
    console.log(`${this.name}出生了`);
  },
};
</script>

<style>
</style>