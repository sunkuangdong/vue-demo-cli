<template>
  <div>Child3</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Child3",
    };
  },
  created() {
    console.log(`${this.name}出生了`);
  },
};
</script>

<style>
</style>