<template>
  <div>
    这里是 Demo 的内部{{ message }}
    <button @click="fn">+1</button>
  </div>
</template>

<script>
export default {
  props: ["message", "fn"],
};
</script>

<style lang="scss" scoped>
</style>