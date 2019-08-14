<template>
  <div class="photosWrapper">
    <div v-for="(item, key) in images" :key="key">
      <img :src="item" class="image">
    </div>
  </div>
</template>
<script>
export default {
  name: 'images',
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    const context = require.context('../assets/images/gallery', true, /\.(png|jpe?g|svg)$/);
    context.keys().map((item) => { //eslint-disable-line
      this.images.push(context(item)); //eslint-disable-line
    });
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

.photosWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  height: 100%;
  width: 100%;
  padding: 15px;
  max-height: 500px;
  overflow: auto;

  .image {
    width: 100%;
    box-shadow: 0 0 15px -5px $blue-darker;
  }

  @media #{$mq-small} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
