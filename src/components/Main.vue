<template>
  <main id="main">
    <navigation />
    <social-menu />
    <slot></slot>
  </main>
</template>
<script>
import Nav from './Nav.vue';
import SocialMenu from './SocialMenu.vue';

export default {
  name: 'main-template',
  components: {
    navigation: Nav,
    'social-menu': SocialMenu,
  },
};
</script>
<style lang="scss" src="../assets/styles/GlobalStyles.scss"></style>
