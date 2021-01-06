<template>
  <div>Child4</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Child4",
    };
  },
  created() {
    console.log(`${this.name}出生了`);
  },
};
</script>

<style>
</style>