<template>
  <nav id="nav">
    <section class="navHalf navImageWrapper">
      <img
        src="../assets/images/logo.png"
        class="navImage"
        alt="Usługi Remontowe Arkadiusz Siekierski"
        v-scroll-to="'#hero'"
      />
    </section>
    <section class="navLinksWrapper" :class="isMenuOpened && 'navLinksOpened'">
      <a href="#" v-scroll-to="'#hero'">home</a>
      <a href="#" v-scroll-to="'#about-text'">oferta</a>
      <a href="#" v-scroll-to="'#about-gallery'">galeria</a>
      <a href="#" v-scroll-to="'#contact'">kontakt</a>
    </section>
    <div class="hamburgerWrapper" :style="isMenuOpened && { position: 'fixed' }">
      <hamburger @clicked="hamburgerHandler" />
    </div>
  </nav>
</template>
<script>
import Hamburger from './Hamburger.vue';

export default {
  name: 'Nav',

  components: {
    hamburger: Hamburger,
  },

  data() {
    return {
      isMenuOpened: false,
    };
  },

  methods: {
    hamburgerHandler(e) {
      this.isMenuOpened = e === 'open';
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme';

#nav {
  position: absolute;
  height: 100px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  color: $white;
  opacity: 0.99;
  z-index: 2;

  a {
    text-decoration: none;
    color: inherit;
    margin: 7px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: $white-darker;
    }
  }

  .navLinksWrapper,
  .navImageWrapper {
    height: 100%;
    width: 50vw;
    display: flex;
    align-items: center;
  }

  .navImageWrapper {
    .navImage {
      height: 90px;
      width: 90px;
      background-color: $blue-darker;

      @media #{$mq-mobile} {
        cursor: pointer;
      }
    }
  }

  .navLinksWrapper {
    text-align: right;
    justify-content: flex-end;
  }

  .hamburgerWrapper {
    display: none;
    align-items: center;
    right: 20px;
    height: 80px;
    position: absolute;
  }

  @media #{$mq-mobile} {
    .navLinksWrapper {
      position: fixed;
      background-color: $green-lighter;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
      transform: translateX(100%);
      transition: all 0.3s;
      opacity: 0.98;
    }

    .navLinksOpened {
      transform: translateX(0);
    }

    .hamburgerWrapper {
      display: flex;
    }
  }
}
</style>
