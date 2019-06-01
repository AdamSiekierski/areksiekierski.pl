<template>
  <div id="navWrapper" :style='{ backgroundColor: this.changedBackground ? "#1f2a36" : "unset" }'>
    <div id="navImageWrapper" class="navHalf">
      <img src="../assets/images/logo.png"
           id="navImage"
           alt="Usługi Remontowe Arkadiusz Siekierski"/>
    </div>
    <div class="navLinksWrapper" :class="isMenuOpened && 'navLinksOpened'">
      <a href="#">home</a>
      <a href="#">oferta</a>
      <a href="#">galeria</a>
      <a href="#">kontakt</a>
    </div>
    <div id="hamburgerWrapper">
      <hamburger @clicked="hamburgerHandler"/>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash.debounce';
import Hamburger from './Hamburger.vue';

export default {
  name: 'Nav',

  components: {
    hamburger: Hamburger,
  },

  data() {
    return {
      changedBackground: false,
      isMenuOpened: false,
    };
  },

  methods: {
    handleScroll() {
      const scrollPos = window.scrollY;
      if (scrollPos > 50 && !this.changedBackground) {
        this.changedBackground = true;
      } else if (!(scrollPos > 50) && this.changedBackground) {
        this.changedBackground = false;
      }
    },
    hamburgerHandler(e) {
      this.isMenuOpened = e === 'open';
    },
  },

  created() {
    window.addEventListener('scroll', debounce(this.handleScroll, 10));
  },

  destroyed() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 10));
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/Theme";

#navWrapper {
  position: fixed;
  height: 100px;
  width: 100vw;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  color: $white;
  transition: all 0.2s ease-in-out;
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

  .navLinksWrapper, #navImageWrapper {
    height: 100%;
    width: 50vw;
    display: flex;
    align-items: center;
  }

  #navImageWrapper {
    #navImage {
      height: 90px;
      width: 90px;
      background-color: $blue-darker;
    }
  }

  .navLinksWrapper {
    text-align: right;
    justify-content: flex-end;
  }

  #hamburgerWrapper {
    height: 100%;
    display: none;
    align-items: center;
    margin-right: 10px;
  }

  @media #{$mq-small} {
    #navImage {
      background-color: transparent;
    }
  }

  @media #{$mq-mobile} {
    .navLinksWrapper {
      position: fixed;
      background-color: $blue;
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
    }

    .navLinksOpened {
      transform: translateX(0);
    }

    #hamburgerWrapper {
      display: flex;
    }
  }
}
</style>
