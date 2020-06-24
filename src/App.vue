<template>
  <div id="app">
    <not-today v-if="!date" />
    <birthday v-else-if="date" />
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
    return {
      date: Date.parse(2020, 7, 14) == Date.now(),
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
  background: black;
}
</style>
