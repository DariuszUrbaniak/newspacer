<template>
  <div class="heroImage" />
</template>
<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="SCSS" scoped>
.heroImage {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/heroimage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0;
 }
</style>
