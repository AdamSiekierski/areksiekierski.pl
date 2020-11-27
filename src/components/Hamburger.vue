<template>
  <button id="outerHamburger" @click="this.handleClick">
    <div
      id="hamburger"
      :style="
        this.isMenuOpened && {
          backgroundColor: `transparent`,
        }
      "
    >
      <div
        class="before"
        :style="
          this.isMenuOpened && {
            transform: `rotate(45deg)`,
            top: '0',
          }
        "
      ></div>
      <div
        class="after"
        :style="
          this.isMenuOpened && {
            transform: `rotate(-45deg)`,
            top: '0',
          }
        "
      ></div>
    </div>
  </button>
</template>
<script>
export default {
  name: 'hamburger',

  data() {
    return {
      isMenuOpened: false,
    };
  },

  methods: {
    handleClick() {
      if (!this.isMenuOpened) {
        this.isMenuOpened = true;
        this.$emit('clicked', 'open');
      } else {
        this.isMenuOpened = false;
        this.$emit('clicked', 'close');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#outerHamburger {
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  #hamburger {
    width: 30px;
    height: 3px;
    background-color: $white;
    position: relative;
    transition: all 0.3s ease-in-out;

    .before,
    .after {
      width: 30px;
      height: 3px;
      content: '';
      position: absolute;
      left: 0;
      background-color: $white;
      transition: all 0.3s ease-in-out;
    }

    .before {
      top: -10px;
    }

    .after {
      top: 10px;
    }
  }
}
</style>
