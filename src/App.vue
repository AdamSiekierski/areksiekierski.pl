<template>
  <main-template>
    <hero />
    <div style="height: 3000px; background-color: #fafafa;"></div>
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
