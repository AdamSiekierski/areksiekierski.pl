<template>
  <div id="about">
    <div id="about-left" class="about-half">
      <section-title theme="light">
        Oferta
      </section-title>
    </div>
    <div id="about-right" class="about-half">
      <h1>hahah</h1>
    </div>
  </div>
</template>
<script>
import SectionTitle from '../components/SectionTitle.vue';

export default {
  name: 'about',

  components: {
    'section-title': SectionTitle,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#about {
  width: 100%;
  height: 100vh;
  display: flex;

  .about-half {
    width: 50%;
    height: 100%;
  }

  #about-left {
    background-color: $blue-darker;
    padding: 20px 20px 0 40px;
  }

  #about-right {
    background-color: $white;
  }

  @media #{$mq-small} {
    #about-left {
      background: $blue;
    }
  }

  @media #{$mq-mobile} {
    #about-right {
      display: none;
    }

    #about-left {
      width: 100%;
      background: $blue;
    }

    background: $white;
    height: calc(100vh - 100px);
  }
}
</style>
