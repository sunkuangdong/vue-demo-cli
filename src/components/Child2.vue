<template>
  <div>
    Child2
    <change-theme-button />
  </div>
</template>

<script>
import log from "../mixins/log";
import ChangeThemeButton from "./ChangeThemeButton";
export default {
  data() {
    return {
      name: "Child2",
    };
  },
  components: {
    ChangeThemeButton,
  },
  mixins: [log],
};
</script>

<style>
</style>