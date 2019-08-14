<template>
  <div id="about">
    <div id="about-left" class="about-half">
      <section-title theme="light">
        Oferta
      </section-title>
      <p>
        W usługach remontowych posiadam ponad 20 letnie doświadczenie. Wykonuję między innymi:
      </p>
      <ul>
        <li>Malowanie wnętrz i elewacji</li>
        <li>Szpachlowanie</li>
        <li>Stiuki weneckie, imitacja betonu</li>
        <li>Układanie paneli podłogowych (również winylowych)</li>
        <li>Montaż listew przypodłogowych</li>
        <li>Ogólne prace wykończeniowe</li>
        <li>Małe zabudowy kartonowo-gipsowe</li>
        <li>Żywice epoksydowe na posadzki betonowe,
          malowanie posadzek betonowych, ochrona betonu
        </li>
        <li>Drobne usługi stolarskie</li>
      </ul>
    </div>
    <div id="about-right" class="about-half">
      <section-title theme="dark">Galeria prac</section-title>
      <images />
    </div>
  </div>
</template>
<script>
import SectionTitle from '../components/SectionTitle.vue';
import Images from '../components/Images.vue';

export default {
  name: 'about',

  components: {
    'section-title': SectionTitle,
    'images': Images, //eslint-disable-line
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#about {
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, $blue 50%, $white 50%);

  .about-half {
    width: 50%;
    height: 100%;
  }

  #about-left {
    background-color: $blue;
    padding: 20px 20px 20px 20px;
    color: $white;
    font-size: 1.6em;
  }

  #about-right {
    background-color: $white;
    padding: 20px;
  }

  ul {
    margin-left: 20px;

    li {
      list-style-position: outside;
    }
  }

  @media #{$mq-small} {
    background: none;
    display: block;

    .about-half {
      width: 100vw;
    }

    #about-left {
      background: $blue;
    }
  }

  @media #{$mq-mobile} {
    background: $white;
  }
}
</style>
