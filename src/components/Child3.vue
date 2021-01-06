<template>
  <div>Child3</div>
</template>

<script>
import log from "../mixins/log";
export default {
  data() {
    return {
      name: "Child3",
    };
  },
  mixins: [log],
};
</script>

<style>
</style>