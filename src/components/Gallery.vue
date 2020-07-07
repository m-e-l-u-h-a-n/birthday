<template>
  <v-app>
    <div class="wrapper">
      <v-hover
        v-slot:default="{ hover }"
        v-for="n in 6"
        :key="n"
        class="grid-item"
      >
        <v-card flat tile class="d-flex">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-out black darken-2 v-card--reveal display-2 white--text"
                style="height: 100%;"
              >
                <div>nimeria</div>
                <div>paryatak</div>
              </div>
            </v-expand-transition>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-hover>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  gap: 50px 0px;
  width: 100vw;
  grid-template-columns: auto auto auto auto;
  background: transparent;
  margin: 10px 10px 10px 10px;
}

.grid-item:nth-child(1) {
  grid-area: 1 / 1 / 3 /3;
}
.grid-item:nth-child(2) {
  grid-area: 3 / 3 / 5 / 5;
}
.grid-item:nth-child(3) {
  grid-area: 5 / 1 / 7 /3;
}
.grid-item:nth-child(4) {
  grid-area: 7 / 3 / 9 /5;
}
.grid-item:nth-child(5) {
  grid-area: 9 / 1 / 11 /3;
}
.grid-item:nth-child(6) {
  grid-area: 11 / 3 / 13 /5;
}
</style>
