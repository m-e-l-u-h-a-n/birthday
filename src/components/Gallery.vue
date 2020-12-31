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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra_with_guitar.jpeg?alt=media&token=dee9654d-2bf9-4e75-90f9-ff2ffe85030b"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra%2Bharshit%2Bsooty.jpeg?alt=media&token=bffe73d8-e587-4c72-a0e0-65bf2310f736"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Kabir Singh and Murli(lite)</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmechanic_mishra.jpeg?alt=media&token=0b60abaf-ad27-4b3b-90ee-8e5aecd5f73e"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Mechanic Mishra</span></div>
        </div>
      </div>
    </section>
    <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra%2Bthakur%2Bchappal.jpeg?alt=media&token=21f4cab2-1011-44e0-8156-42ba7b3fd093"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Short GPL(from CRs)</span></div>
        </div>
      </div>
    </section>
        <section class="container hero">
      <div class="hero__inner">
        <div class="hero__images">
          <img
            class="hero__image"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fcheers_mishra.jpeg?alt=media&token=af905004-c30d-47c9-be45-d65d94be129d"
          />
        </div>
        <div class="hero__content">
          <div class="hero__headline"><span>Cheers Party begins</span></div>
        </div>
      </div>
    </section>
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
