<template>
  <div>Child5</div>
</template>

<script>
import log from "../mixins/log";
export default {
  data() {
    return {
      name: "Child5",
    };
  },
  mixins: [log],
};
</script>

<style>
</style>