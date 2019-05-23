<template>
  <div id="main">
    <navigation />
    <slot></slot>
  </div>
</template>
<script>
import Nav from './Nav.vue';

export default {
  name: 'main-template',
  components: {
    navigation: Nav,
  },
};
</script>
<style lang="scss">
@import "../assets/styles/GlobalStyles.scss";
</style>
