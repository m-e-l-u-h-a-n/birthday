<template>
  <div class="container">
    <transition name="fade">
      <div class="loading" v-if="isLoading">
        <img src="../assets/loader.gif" />
      </div>
      <div class="loaded" v-else>
        <figure>
          <img :src="imgSrc" />
          <figcaption>Seriously is it 14 July Already.</figcaption>
        </figure>
      </div>
    </transition>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "NotToday",
  data: () => {
    return { imgSrc: "", isLoading: true };
  },
  methods: {
    giphy: async function() {
      let params = {
        api_key: "O7JknqEzMWfWjlqYzVjHYLt0TGmpigCn",
        q: "Not now",
        limit: 12,
        lang: "en",
      };
      let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: params,
      });
      this.imgSrc =
        response.data.data[
          Math.floor(Math.random() * 10 + 1)
        ].images.original.url;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    this.giphy().catch((e) => console.log(e));
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter($dir) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $dir;
}

.container {
  @include flexCenter(column);
  width: 100%;
  height: 100vh;
  background: black;
  .loading img {
    width: 500px;
  }
  figcaption {
    color: white;
  }
}
</style>
