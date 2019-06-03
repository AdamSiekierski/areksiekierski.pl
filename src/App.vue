<template>
  <main-template>
    <hero />
    <about />
  </main-template>
</template>
<script>
import MainTemplate from './templates/MainTemplate.vue';
import Hero from './templates/Hero.vue';
import About from './templates/About.vue';

export default {
  name: 'app',
  components: {
    'main-template': MainTemplate,
    hero: Hero,
    about: About,
  },
};
</script>
