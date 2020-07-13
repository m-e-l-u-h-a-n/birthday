<template>
  <div class="demo-wrapper">
    <section class="demo-text">
      <div class="wrapper text">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=200"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=6"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=86"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=9"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=194"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=27"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=86"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=122"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=123"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=29"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=150"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=3"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=10"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=123"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=188"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=159"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="demo-text">
      <div class="wrapper text">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "scrollGallery",
};
</script>

<style scoped lang="scss">
.demo-wrapper {
  overflow-x: hidden;
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
  }

  img {
    width: 100%;
    height: auto;
    background: #f0f0f0;
  }

  ul {
    padding-left: 1rem;
    list-style: none;
  }

  li {
    flex-shrink: 0;
    width: clamp(500px, 60vw, 800px);
    padding-right: 1rem;
  }
}

.wrapper {
  display: -webkit-box;
  display: flex;
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-text .text {
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
}
</style>
