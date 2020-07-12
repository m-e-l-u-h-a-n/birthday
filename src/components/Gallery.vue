<template>
  <div class="main">
    <header class="container">
      <h2 class="container__headline">Lets get started ?</h2>
    </header>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img class="hero__image" src="https://picsum.photos/1200/800" />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Happy Birthday CTS</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img class="hero__image" src="https://picsum.photos/1200/800" />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Happy Birthday CTS</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img class="hero__image" src="https://picsum.photos/1000/600" />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Happy Birthday CTS</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img class="hero__image" src="https://picsum.photos/1300/800" />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Happy Birthday CTS</span></div>
        </div>
      </div>
    </section>
    <footer class="container">
      <h2 class="container__headline">lorem ipsum.</h2>
    </footer>

    <section class="scroll demo-text">
      <div class="wrapper text">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
    </section>
    <section class="scroll demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=152"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=95"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=69"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=148"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="scroll demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=36"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=68"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=38"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=34"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="scroll demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=23"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=41"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=138"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="scroll demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=56"
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
            src="https://source.unsplash.com/random/1240x874?sig=90"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://source.unsplash.com/random/1240x874?sig=162"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="scroll demo-text">
      <div class="wrapper text">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
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
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          pin: true,
          start: "center center",
          end: "bottom -100%",
          toggleClass: "active",
          ease: "power2",
        },
      });
    });

    images.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: 0.5,
          start: "top bottom",
          end: "bottom -300%",
          ease: "power2",
        },
        y: "-30%",
      });
    });

    gsap.utils.toArray(".scroll").forEach((section, index) => {
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
            scrub: 0.5,
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
  width: 100%;
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

.demo-wrapper {
  overflow-x: hidden;
}

.wrapper {
  display: -webkit-box;
  display: flex;
  img {
    max-width: 800px;
  }
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-text .text {
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
  color: white;
}

.demo-text .text:last-child {
  padding-bottom: 200px;
}
</style>
