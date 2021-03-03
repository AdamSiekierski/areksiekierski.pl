<template>
  <div class="photosWrapper">
    <div class="photosContainer">
      <GalleryImage :src="item" v-for="(item, key) in images" :key="key" alt="" />
    </div>
  </div>
</template>
<script>
import GalleryImage from './GalleryImage.vue';

export default {
  components: { GalleryImage },
  name: 'Gallery',
  data() {
    return {
      images: [],
      columns: 0,
    };
  },
  mounted() {
    const context = require.context('../assets/images/gallery', true, /\.(jpg)|(jpeg)$/);
    context.keys().map((item) => {
      this.images.push(context(item)); //eslint-disable-line
    });
  },
  created() {
    this.countColumns();
    window.addEventListener('resize', this.countColumns);
  },
  destroyed() {
    window.removeEventListener('resize', this.countColumns);
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

.photosWrapper {
  padding: 5px;
  overflow-x: hidden;
  overflow-y: auto;

  .photosContainer {
    column-gap: 5px;
    white-space: nowrap;
    column-count: auto;
    column-width: 150px;

    @media #{$mq-small} {
      column-width: 100px;
    }
  }

  &::-webkit-scrollbar {
    background-color: $blue;
    color: $blue;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $blue-lighter;
    cursor: pointer;
  }

  @media #{$mq-small} {
    overflow: hidden;
  }
}
</style>
