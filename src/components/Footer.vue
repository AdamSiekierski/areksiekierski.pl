<template>
  <footer class="footer">Copyright &copy; {{ year }} Arkadiusz Siekierski</footer>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/Theme.scss';

.footer {
  text-align: center;
  padding: 2px 5px;
  color: white;
  background-color: $blue;
}
</style>
