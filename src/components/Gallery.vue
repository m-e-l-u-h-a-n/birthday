<template>
  <div class="main">
    <header class="container">
      <h2 class="container__headline">Lets get started ?</h2>
    </header>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0000.jpg?alt=media&token=05bd1db7-1bc3-46c8-bb2d-494c1d08d5cc"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Meet Papa ki Pari</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0007.jpg?alt=media&token=489d3ef6-fd00-40c0-a560-87b42b23bfa7"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Raider 🚴‍♀️</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0008.jpg?alt=media&token=e9ca9a28-8def-4b3d-9c18-fd618512de3e"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Sone do Yaar</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200713-WA0037.jpg?alt=media&token=ba805ed4-76e7-4bc3-ad3b-6182806a457b"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Ahh Fake Candid</span></div>
        </div>
      </div>
    </section>
    <footer class="container">
      <h2 class="container__headline">lorem ipsum.</h2>
    </footer>
    <scrollGallery />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import scrollGallery from "./scrollGallery.vue";

export default {
  components: {
    scrollGallery,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const container = gsap.utils.toArray(".hero");

    const images = gsap.utils.toArray(".hero__image");

    container.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        toggleClass: "active",
        ease: "power2",
      });
    });

    images.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: 0.5,
          start: "center center",
          end: "bottom -50%",
          ease: "power2",
        },
        y: "-30%",
      });
    });

    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.utils.toArray(".demo-wrapper section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            start: "start 60%",
            end: "+=720px",
            ease: "power2",
            scrub: 0.6,
          },
        }
      );
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0 10px;
  height: 100vh;
  height: -webkit-fill-available;
  color: white;
  text-align: center;
}

.container__headline {
  font-size: 5vmin;
}

.hero__inner {
  display: flex;
  position: relative;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
}

.hero__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160%;
  object-fit: cover;
}

.hero__content {
  display: none;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.hero__headline {
  --padding: 1.5vmin;
  --duration: 400ms;
  --delay: calc(var(--duration) / 2);
  --ease: cubic-bezier(0.25, 1, 0.5, 1);

  position: relative;
  display: inline-block;
  font-size: 10vmin;
  overflow: hidden;
  margin-top: calc(var(--padding) * -1);
  padding: var(--padding);

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--padding));
    left: 0;
    background-color: white;
    width: 100%;
    height: 1.5vmin;
    transform: scaleX(0);
    transition: transform var(--duration) var(--delay) var(--ease);
  }

  span {
    display: block;
    transform: translateY(110%);
    transition: transform var(--duration) var(--ease);
  }

  .active & {
    &::after {
      transform: scaleX(1);
      transition-delay: 0s;
    }
    span {
      transform: translateY(0);
      transition-delay: var(--delay);
    }
  }
}
</style>
