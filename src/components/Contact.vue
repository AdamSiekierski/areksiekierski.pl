<template>
  <section id="contact">
    <div class="contactWrapper">
      <SectionTitle theme="light">
        Kontakt
      </SectionTitle>
      <h4>Nr kom.</h4>
      <h2>667 778 177</h2>
      <h4>Adres e-mail:</h4>
      <a href="mailto:kontakt@areksiekierski.pl">
        <h2>kontakt@areksiekierski.pl</h2>
      </a>
    </div>
  </section>
</template>
<script>
import SectionTitle from './SectionTitle.vue';

export default {
  components: { SectionTitle },
  name: 'Contact',
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#contact {
  padding: 30px 20px;
  background-color: $blue-darker;
  color: white;
}

.contactWrapper {
  max-width: 800px;
  margin: 0 auto;

  a {
    color: white;
  }

  h2 {
    font-size: 2.5em;
    text-decoration: underline;
    margin-bottom: 10px;
    word-break: break-all;
  }

  @media #{$mq-small} {
    h2 {
      font-size: 2em;
    }
  }
}
</style>
