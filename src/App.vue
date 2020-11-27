<template>
  <Main>
    <Hero />
    <About />
    <Contact />
    <Footer />
  </Main>
</template>
<script>
import Main from './components/Main.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Main,
    Hero,
    About,
    Contact,
    Footer,
  },
};
</script>
