<template>
  <Main>
    <Hero />
    <About />
  </Main>
</template>
<script>
import Main from './components/Main.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: { Main, Hero, About },
};
</script>
