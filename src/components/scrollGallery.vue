<template>
  <div class="demo-wrapper">
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra_bg_sarnath.jpeg?alt=media&token=6ffe3035-d1bb-453c-92d3-5bdadfdda84b"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra%2Bgyaan%2Bscooty.jpeg?alt=media&token=e17ce157-f727-4dc2-91cf-404fa063b963"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra%2Bmovieman.jpeg?alt=media&token=75338334-c72a-49a7-8232-91c2330ff79f"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Flonely_mishra_srnath.jpeg?alt=media&token=d0e26308-91c7-477e-b345-b5fa5326ac42"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/good%20photos%2Fmishra%26friends.jpeg.jpeg?alt=media&token=7f32727c-cfc4-4cde-b969-fc9afc150a20"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="increment">
      Ahh Papa apne form q bhara?
    </section>
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/memes%2Fmeme_messiah.jpeg?alt=media&token=715e5090-40ef-4b5c-b6b5-bc4ff572c18c"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/memes%2Fmeme_paranjay_papa.jpeg?alt=media&token=90d55974-624e-4693-9c00-f62d9d1f222e"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/memes%2Fmeme_child.jpeg?alt=media&token=8982a2ad-a4c3-4eda-a630-c21c3ff15341"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/memes%2Fmeme_liion.jpeg?alt=media&token=253d6e75-72c2-4cfb-9f5b-7e0429c5276d"
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
            src="https://firebasestorage.googleapis.com/v0/b/birthday-218c6.appspot.com/o/memes%2Fmeme_self_obsess.jpeg?alt=media&token=1f10d553-61a2-4995-a148-f7f8a31b3d96"
            width="1240"
          />
        </li>
      </ul>
    </section>
    <section class="increment">
      Let's Meet the Team
      <div class="imgbox">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/cbdayy.png?alt=media&token=9ba39f2f-3cb7-4e21-85b7-ef802a6347ea"
        />
      </div>
      <section class="king">
        Website by Sherlock.
      </section>
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
    width: 90%;
    height: auto;
    background: #f0f0f0;
  }

  ul {
    padding-left: 0.2rem;
    list-style: none;
    display: flex;
    align-items: center;
    // justify-content: center;
  }

  li {
    display: flex;
    flex-shrink: 0;
    width: clamp(500px, 60vw, 900px);
    padding-right: 1rem;
  }
}

.wrapper {
  display: -webkit-box;
  display: flex;
  justify-content: center;
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-gallery {
  justify-content: center;
}

.increment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  font-size: 40px;
  .imgbox {
    display: flex;
    justify-content: center;
    img {
      margin-top: 60px;
      width: 100%;
      object-fit: cover;
    }
  }
}

.king {
  margin-top: 40px;
  font-size: 15px;
}

@media (min-width: 720px) {
  .demo-wrapper ul {
    justify-content: center;
  }
}
</style>
