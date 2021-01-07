<template>
  <div>
    <button @click="z">当前主题色：{{ themeName }}换肤</button>
    <button @click="fontSizeFn('bug')">大</button>
    <button @click="fontSizeFn('normal')">中</button>
    <button @click="fontSizeFn('small')">小</button>
  </div>
</template>

<script>
export default {
  inject: ["themeName", "fontSize", "changeTheme", "changeFontSize"],
  methods: {
    z() {
      this.changeTheme();
    },
    fontSizeFn(string) {
      this.changeFontSize(string);
    },
  },
};
</script>

<style>
</style>