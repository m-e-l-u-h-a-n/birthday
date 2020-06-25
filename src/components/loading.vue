<template>
  <div class="loading active">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style lang="scss" scoped>
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading.active {
  animation: animate 0.5s linear infinite;
}

.loading {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  }

  span:nth-child(1) {
    filter: blur(5px);
  }
  span:nth-child(2) {
    filter: blur(10px);
  }
  span:nth-child(3) {
    filter: blur(25px);
  }
  span:nth-child(4) {
    filter: blur(50px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 30px;
    left: 30px;
    bottom: 30px;
    right: 30px;
    background: #04090d;
    border-radius: 50%;
  }
}
</style>
