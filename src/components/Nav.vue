<template>
  <nav
    class="nav"
    :class="isMenuOpened && 'nav--opened'"
    :style="{ height, opacity: isScrollingMobile ? 0.99 : 1 }"
  >
    <section class="navImageWrapper" :style="{ padding: isScrollingMobile ? '2px' : '10px' }">
      <img src="../assets/images/logo.png" class="navImage" alt="" v-scroll-to="'#hero'" />
    </section>
    <section class="navLinksWrapper">
      <a href="#" v-scroll-to="'#hero'">home</a>
      <a href="#" v-scroll-to="'#about-offer'">oferta</a>
      <a href="#" v-scroll-to="'#about-gallery'">galeria</a>
      <a href="#" v-scroll-to="'#contact'">kontakt</a>
    </section>
    <div class="hamburgerWrapper" :style="{ height }">
      <Hamburger @clicked="hamburgerHandler" />
    </div>
  </nav>
</template>
<script>
import Hamburger from './Hamburger.vue';

export default {
  name: 'Nav',

  components: {
    Hamburger,
  },

  data() {
    return {
      isMenuOpened: false,
      height: '100px',
    };
  },

  methods: {
    hamburgerHandler(e) {
      this.isMenuOpened = e === 'open';
    },
    handleScroll() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        window.requestAnimationFrame(() => {
          this.height = window.scrollY === 0 ? '100px' : '50px';
        });
      }
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  computed: {
    isScrollingMobile() {
      return this.height !== '100px';
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme';

.nav {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  color: $white;
  z-index: 2;
  transition: height 0.2s ease-in-out;
  top: 0;
  left: 0;

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
    transition: padding 0.2s ease-in-out;

    .navImage {
      height: 100%;
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
    position: absolute;
    transition: height 0.3s ease-in-out;
  }

  @media #{$mq-mobile} {
    position: fixed;
    background-color: $blue-darker;

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

    &--opened {
      .navLinksWrapper {
        transform: translateX(0);
      }

      .hamburgerWrapper {
        position: fixed;
      }
    }

    .hamburgerWrapper {
      display: flex;
    }
  }
}
</style>
