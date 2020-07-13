<template>
  <div class="demo-wrapper">
    <section class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0001.jpg?alt=media&token=7eb24dac-2e86-4ec3-9ec9-f7fee0287142"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0002.jpg?alt=media&token=517606d4-918a-4e7f-a97c-7e9c659dfe39"
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
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0005.jpg?alt=media&token=58daa4c3-7b6c-4e15-a366-5f309ddb4fb5"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0004.jpg?alt=media&token=c7cd1e29-ca84-4e42-8f71-dfe64e3e1c13"
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
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0003.jpg?alt=media&token=9e178ab3-6f24-4557-9ce8-2e12ec69e5fd"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200712-WA0021.jpg?alt=media&token=f46c63a8-bd08-4d52-b9af-60ab0e9e1197"
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
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200713-WA0034.jpg?alt=media&token=2acc9d74-554d-4ff7-8023-a205a22f377d"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/IMG-20200713-WA0043.jpg?alt=media&token=0f7cb674-e365-443e-ad3d-180cbf5bbf09"
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
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/Screenshot_20200713-132534_Photos.jpg?alt=media&token=7d52b035-ce7e-4f36-b22a-f191f4047bef"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/Screenshot_20200713-132943_Photos.jpg?alt=media&token=3e78b4a9-4e1e-4e9b-87ff-037df18738a3"
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
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/Screenshot_20200713-133046_Photos.jpg?alt=media&token=0d79aebb-a942-4cc5-85ee-600c5762880d"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://firebasestorage.googleapis.com/v0/b/just-image-storage.appspot.com/o/Screenshot_20200713-133238_Photos.jpg?alt=media&token=ee51a02d-0872-49aa-be80-ebf21152927d"
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
        website by Nebuchadnezzar.
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
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.increment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
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
