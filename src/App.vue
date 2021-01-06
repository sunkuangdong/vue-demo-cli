<template>
  <div class="app">
    <Child1 v-if="childVisbale" />
    <button @click="x">x</button>
    <Child2 />
    <button>x</button>
    <Child3 />
    <button>x</button>
    <Child4 />
    <button>x</button>
    <Child5 />
    <button>x</button>
  </div>
</template>

<script>
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import Child4 from "./components/Child4";
import Child5 from "./components/Child5";
export default {
  data() {
    return {
      name: "App",
      childVisbale: true,
    };
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
  methods: {
    x() {
      this.childVisbale = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>