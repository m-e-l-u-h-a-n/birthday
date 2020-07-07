<template>
  <div id="app">
    <not-today v-if="!isToday" />
    <birthday v-else-if="isToday" />
  </div>
</template>

<script>
import NotToday from "./components/NotToday.vue";
import Birthday from "./components/Birthday.vue";
export default {
  name: "App",
  components: {
    NotToday,
    Birthday,
  },
  data: () => {
    var today = new Date();
    var birthday = new Date(2020, 6, 14);
    return {
      isToday: birthday <= today,
    };
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Cinzel);

:root {
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Cinzel";
}

body {
  background: #04090d;
}
</style>
