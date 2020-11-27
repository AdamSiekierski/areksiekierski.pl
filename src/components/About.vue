<template>
  <div id="about">
    <section id="about-text" class="about-half">
      <SectionTitle theme="light">
        Oferta
      </SectionTitle>
      <p>
        Działam na terenie Poznania i okolic. W usługach remontowych posiadam ponad 20 letnie
        doświadczenie. Wykonuję między innymi:
      </p>
      <ul>
        <li>Malowanie wnętrz i elewacji</li>
        <li>Szpachlowanie</li>
        <li>Stiuki weneckie, imitacja betonu</li>
        <li>Układanie paneli podłogowych (również winylowych)</li>
        <li>Montaż listew przypodłogowych</li>
        <li>Ogólne prace wykończeniowe</li>
        <li>Zabudowy kartonowo-gipsowe</li>
        <li>
          Żywice epoksydowe na posadzki betonowe, malowanie posadzek betonowych, ochrona betonu
        </li>
        <li>Drobne usługi stolarskie</li>
      </ul>
    </section>
    <section id="about-gallery" class="about-half">
      <SectionTitle theme="dark">Galeria prac</SectionTitle>
      <Images />
    </section>
  </div>
</template>
<script>
import SectionTitle from './SectionTitle.vue';
import Images from './Images.vue';

export default {
  name: 'about',

  components: {
    SectionTitle,
    Images,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#about {
  display: flex;
  background: linear-gradient(90deg, $blue 50%, $white 50%);
  max-height: 100vh;

  .about-half {
    flex: 1;
  }

  #about-text {
    background-color: $blue;
    padding: 20px;
    color: $white;
    font-size: 1.5em;
  }

  #about-gallery {
    background-color: $white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
  }

  ul {
    margin-left: 20px;

    li {
      list-style-position: outside;
    }
  }

  @media #{$mq-small} {
    background: none;
    flex-direction: column;
    max-height: unset;

    #about-text {
      background: $blue;
    }
  }

  @media #{$mq-mobile} {
    background: $white;
  }
}
</style>
