<template>
  <div>Child4</div>
</template>

<script>
import log from "../mixins/log";
export default {
  data() {
    return {
      name: "Child4",
    };
  },
  mixins: [log],
};
</script>

<style>
</style>