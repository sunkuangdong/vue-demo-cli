<template>
  <div>Child2</div>
</template>

<script>
import log from "../mixins/log";
export default {
  data() {
    return {
      name: "Child2",
    };
  },
  mixins: [log],
};
</script>

<style>
</style>