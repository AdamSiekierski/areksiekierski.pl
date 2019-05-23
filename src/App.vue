<template>
  <main-template>
    <hero />
  </main-template>
</template>
<script>
import MainTemplate from './templates/MainTemplate.vue';
import Hero from './templates/Hero.vue';

export default {
  name: 'app',
  components: {
    'main-template': MainTemplate,
    hero: Hero,
  },
};
</script>
