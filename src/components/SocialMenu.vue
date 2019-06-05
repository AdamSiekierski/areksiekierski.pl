<template>
  <div id="socialMenuWrapper">
    <a href="https://facebook.com">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.874 13.749" class="icon">
        <path d="M7.719,4.583H6V6.874H7.719v6.874h2.864V6.874h2.086l.205-2.291H10.583V3.628c0-.547.11-.764.639-.764h1.653V0H10.693C8.633,0,7.719.907,7.719,2.644Z" transform="translate(-6 0)"></path><!-- eslint-disable-line -->
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: 'social-menu',
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

#socialMenuWrapper {
  display: block;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  .icon {
    height: 30px;
    fill: $blue-darker;
  }

  &:hover {
    background-color: rgb(60, 90, 153);

    .icon {
      fill: $white;
    }
  }

  @media #{$mq-small} {
    position: absolute;
    z-index: 1;

    .icon {
      fill: $white;
    }
  }

  @media #{$mq-mobile} {
    right: 0;
    left: unset;
  }
}
</style>
