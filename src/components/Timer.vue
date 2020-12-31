<template>
  <div class="container-timer">
    <h1>Countdown begins</h1>
    <ul>
      <li>{{ days }}</li>
      <li>{{ hours }}</li>
      <li>{{ minutes }}</li>
      <li>{{ seconds }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "timer",
  data() {
    return {
      interval: "",
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
  },
  mounted() {
    // set your date here
    let countDown = new Date("Jul 14, 2020 00:00:00").getTime();
    this.interval = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDown - now;
      this.calcTime(distance);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  text-align: center;
}

li {
  display: inline-block;
  font-size: 1.5em;
  text-align: center;
  list-style-type: none;
  padding: 0.8em;
  text-transform: uppercase;
}

.container-timer {
  text-align: center;
  color: white;
  text-shadow: 1px 1.5px #a1a1a1;
  font-size: 0.85rem;
  margin: 9px auto;
}
</style>
