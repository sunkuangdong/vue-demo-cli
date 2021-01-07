<template>
  <div v-y.prevent :class="`app theme-${themeName} theme-${fontSize}`">
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
  name: "App",
  directives: {
    y: {
      inserted: function (el) {
        el.addEventListener("click", () => {
          console.log("y");
        });
      },
    },
  },
  provide() {
    return {
      themeName: this.themeName,
      changeTheme: this.changeTheme,
      fontSize: this.fontSize,
      changeFontSize: this.changeFontSize,
    };
  },
  data() {
    return {
      childVisbale: true,
      themeName: "blue",
      fontSize: "normal",
    };
  },
  methods: {
    x() {
      this.childVisbale = false;
    },
    changeTheme() {
      if (this.themeName === "blue") {
        this.themeName = "red";
      } else {
        this.themeName = "blue";
      }
    },
    changeFontSize(string) {
      this.fontSize = string;
    },
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
};
</script>

<style lang="scss" scoped>
.app.theme-blue button {
  background: blue;
  color: white;
}
.app.theme-blue {
  color: darkblue;
}
.app.theme-red button {
  background: red;
  color: white;
}
.app.theme-red {
  color: red;
}
.app.theme-small {
  font-size: 12px;
}
.app.theme-normal {
  font-size: 14px;
}
.app.theme-big {
  font-size: 18px;
}
</style>