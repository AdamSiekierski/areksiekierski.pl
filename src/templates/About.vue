<template>
  <div id="about">
    Oferta
  </div>
</template>
<script>
export default {
  name: 'about',
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#about {
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, $blue-darker 50%, $white 50%);

  @media #{$mq-mobile} {
    background: $white;
    height: calc(100vh - 100px);
  }
}
</style>
