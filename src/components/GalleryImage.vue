<template>
  <fragment>
    <transition name="fade">
      <div class="modal" :class="opened && 'modal--opened'" v-if="opened" @click="trigger()">
        <button class="modal__close-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="45px"
            height="45px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
        <img class="modal__image" :src="src" alt="" />
        <div></div>
      </div>
    </transition>
    <button @click="trigger()" class="image">
      <img :src="src" :alt="alt" loading="lazy" />
    </button>
  </fragment>
</template>
<script>
export default {
  name: 'GalleryImage',
  props: {
    src: String,
    alt: String,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    trigger() {
      document.body.style.overflow = this.opened ? 'auto' : 'hidden';
      this.opened = !this.opened;
    },
  },
};
</script>
<style lang="scss" scoped>
.image {
  display: block;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
  page-break-inside: avoid; /* Firefox */
  break-inside: avoid;

  img {
    width: 100%;
  }
}

.modal {
  &--opened {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    max-height: 100vh;
    padding: 95px 20px 20px 20px;
    background-color: rgba(0, 0, 0, 0.95);
  }

  &__image {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }

  &__close-button {
    background: none;
    border: none;
    appearance: none;
    top: 10px;
    left: 10px;
    display: block;
    line-height: 1;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    background-color: white;
    box-sizing: content-box;
    width: 45px;
    height: 45px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
