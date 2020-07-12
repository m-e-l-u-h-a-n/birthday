<template>
  <div class="notToday">
    <transition name="fade" mode="out-in">
      <loading v-if="isLoading" />
      <div class="loaded" v-else>
        <figure>
          <video muted autoplay="autoplay" loop="true" :src="imgSrc" />
          <timer />
        </figure>
      </div>
    </transition>
  </div>
</template>

<script>
import loading from "./loading.vue";
import timer from "./Timer.vue";
export default {
  name: "NotToday",
  data: () => {
    return {
      imgSrc: "",
      isLoading: true,
      images: [
        "https://media.giphy.com/media/xThtavV3Ds2631gcWk/giphy.mp4",
        "https://media.giphy.com/media/l4FsoQeVeMBqp662c/giphy.mp4",
        "https://media.giphy.com/media/MEF1VadKbQBdmd8LCn/giphy.mp4",
        "https://media.giphy.com/media/xT9KVmZwJl7fnigeAg/giphy.mp4",
        "https://media.giphy.com/media/1oGnXs7DolDPnyVqt2/giphy.mp4",
        "https://media.giphy.com/media/d2ZcfODrNWlA5Gg0/giphy.mp4",
      ],
    };
  },
  components: { loading, timer },
  mounted() {
    let select = Math.floor(Math.random() * 5);
    this.imgSrc = this.images[select];
    let loader = document.querySelector(".loading.active");
    setTimeout(() => {
      loader.classList.toggle("active");
      this.isLoading = false;
    }, 1000);
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
.notToday {
  background: black;
  overflow: hidden;
  @include flexCenter(column);
  padding: 0;
  width: 100%;
  height: 100vh;
  figure {
    text-align: center;
  }
  video {
    max-width: 95%;
  }
}
</style>
