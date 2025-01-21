<template>
  <div :style="style" class="item" @click="handleClic" @keydown.enter="handleClic" @keydown.space="handleClic" tabindex="0" />
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title,
    };
  },
  computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },
  methods: {
    handleClic() {
      console.log('Kliknięto element:', this.item);
      this.$emit('click', this.item);
    },
  },
};
</script>
<style lang="scss" scoped>
  .item {
    width: 40vw;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 25vw;
    }
  }
</style>
