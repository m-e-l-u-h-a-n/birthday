<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <loading v-if="isLoading" />
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
import loading from "./loading.vue";

export default {
  name: "NotToday",
  data: () => {
    return { imgSrc: "", isLoading: true };
  },
  components: { loading },
  methods: {
    giphy: async function() {
      let params = {
        api_key: "O7JknqEzMWfWjlqYzVjHYLt0TGmpigCn",
        q: "No",
        limit: 12,
        lang: "en",
      };
      let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: params,
      });
      this.imgSrc =
        response.data.data[
          Math.floor(Math.random() * 4 + 1)
        ].images.original.url;

      let loader = document.querySelector(".loading.active");
      loader.classList.toggle("active");
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

.fade-enter-active,
.fade-leave-active {
  transition: transform 1s ease-in;
}

.fade-enter {
  transform: scaleY(0) translateZ(0);
}

.fade-leave-to {
  transform: translateX(200%) rotate(1000deg);
}

.container {
  overflow: hidden;
  @include flexCenter(column);
  width: 100%;
  height: 100vh;
  background: #04090d;

  figure {
    text-align: center;
    padding: 20px;
    img {
      max-width: 100%;
      filter: grayscale(50%);
    }
  }
  figcaption {
    color: white;
    text-shadow: 2px 2px #a1a1a1;
    font-size: 1.2rem;
  }
}
</style>
