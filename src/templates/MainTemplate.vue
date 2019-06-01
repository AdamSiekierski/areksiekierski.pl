<template>
  <div id="main">
    <navigation />
    <social-menu />
    <slot></slot>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue';
import SocialMenu from '../components/SocialMenu.vue';

export default {
  name: 'main-template',
  components: {
    navigation: Nav,
    'social-menu': SocialMenu,
  },
};
</script>
<style lang="scss" src="../assets/styles/GlobalStyles.scss">
</style>
