<template>
  <div id="main">
    <Header />
    <slot></slot>
  </div>
</template>
<script>
import Header from './Header.vue';

export default {
  name: 'main-template',
  components: {
    Header: Header,
  },
};
</script>
<style lang="scss">
@import "../assets/styles/GlobalStyles.scss";
</style>
