<template>
  <div class="photosWrapper">
    <div class="photosContainer" :style="{ columnCount: columns }">
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
    const context = require.context('../assets/images/gallery', true, /\.(jpg)$/);
    context.keys().map((item) => {
      this.images.push(context(item)); //eslint-disable-line
    });
  },
  methods: {
    countColumns() {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        const width = window.innerWidth;

        this.columns = Math.floor(width / 200);
      } else {
        const width = window.innerWidth / 2;

        this.columns = Math.floor(width / 300);
      }
    },
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
}
</style>
