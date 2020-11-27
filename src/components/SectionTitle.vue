<template>
  <div :class="theme === 'light' ? 'sectionTitleLight' : 'sectionTitleDark'">
    <h2>
      <slot></slot>
    </h2>
  </div>
</template>
<script>
export default {
  name: 'section-title',

  props: {
    theme: String,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

.sectionTitle {
  font-size: 2rem;
  position: relative;
  z-index: 1;
  margin-bottom: 40px;
  margin-left: 20px;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 2em;
    position: absolute;
    left: -20px;
    background-color: $green-lighter;
    z-index: -1;
  }
}

.sectionTitleLight {
  @extend .sectionTitle;

  color: $white;
}

.sectionTitleDark {
  @extend .sectionTitle;

  color: $blue-darker;
}
</style>
