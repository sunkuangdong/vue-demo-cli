<template>
  <div>Child5</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Child5",
    };
  },
  created() {
    console.log(`${this.name}出生了`);
  },
};
</script>

<style>
</style>